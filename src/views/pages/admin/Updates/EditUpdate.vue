<template>
 <div>
   <v-container class="mt-4 mb-15">
      <v-btn text v-on:click.prevent="$router.back()">
        <v-icon>
         mdi-arrow-left
        </v-icon>
        Return
      </v-btn>
      <p class="headline pl-6 mt-5 font-weight-bold">Edit Update</p>
      <p class="caption red--text pl-6">** All fields are required.</p>
      <v-form ref="form" @submit.prevent="save" class="pr-6 pl-6">
       <v-text-field type="text" v-model="data.title" label="Title"></v-text-field>
       <v-textarea
           label="Post Excerpt"
           auto-grow
           clearable
           counter="125"
           rows="1"
           :rules="rules"
           row-height="15"
           clear-icon="mdi-close-circle"
           v-model="data.post_excerpt"
           hint="A small content from your post"
         ></v-textarea>
       <p class="grey--text darken-3 mt-3">Post Content</p>
       <vue-editor
          id="editor"
          :customModules="customModulesForEditor"
          :editorOptions="editorSettings"
          :editorToolbar="customToolbar"
          useCustomImageHandler
          v-model="data.post_content"
          @image-added="handleImageAdded"
        />
        <v-btn depressed type="submit" color="primary" :loading="isLoading" class="mt-4">
          Update
        </v-btn>
      </v-form>
   </v-container>
 </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
import ImageResize from "quill-image-resize-vue";
import { ImageDrop } from "quill-image-drop-module";
import { mapState } from 'vuex';
export default {
  components: { VueEditor },
  data(){
   return {
    rules: [v => v.length <= 125 || 'Max 125 characters'],
    data: {
     title: '',
     post_content: '',
     post_excerpt: '',
    },
    customModulesForEditor: [
      { alias: "imageDrop", module: ImageDrop },
      { alias: "imageResize", module: ImageResize },
    ],
    fileRecords: [],
    fileRecordsForUpload: [],
    editorSettings: {
      modules: {
        imageDrop: true,
        imageResize: {},
      },
    },
    customToolbar: [
      [{ header: [false, 1, 2, 3, 4, 5, 6] }],
      ["bold", "italic", "underline", "strike"],
      [
        { align: "" },
        { align: "center" },
        { align: "right" },
        { align: "justify" },
      ],
      ["code-block"],
      [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
      [{ script: "sub" }, { script: "super" }],
      ["link", "image"],
      ["clean"],
    ],
   }
 },
  computed: {
   ...mapState('auth', ['user']),
   ...mapState('updates', ['edit_update'])
  },
 async mounted(){
    this.data = {
      id: this.edit_update.id,
      title: this.edit_update.title,
      post_content: this.edit_update.post_content,
      post_excerpt: this.edit_update.post_excerpt,
    }
 },
 methods: {
    filesSelected: function(fileRecordsNewlySelected) {
       var validFileRecords = fileRecordsNewlySelected.filter(
       (fileRecord) => !fileRecord.error
       );
       this.fileRecordsForUpload = this.fileRecordsForUpload.concat(
       validFileRecords
       );
    },
    fileDeleted: function(fileRecord) {
      var i = this.fileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        this.fileRecordsForUpload.splice(i, 1);
      }
    },
    onBeforeDelete: function(fileRecord) {
      console.log(fileRecord)
      var i = this.fileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        this.fileRecordsForUpload.splice(i, 1);
       var k = this.fileRecords.indexOf(fileRecord);
        if (k !== -1) this.fileRecords.splice(k, 1);
      }
    },
    handleImageAdded: function(file) {
      var formData = new FormData();
      formData.append("image", file);
    },
    async save(){
      this.isLoading = true
      const { status, data } = await this.$store.dispatch('updates/editUpdate', this.data)
      this.checkStatus(data, status, '', 'updates/getUpdates')
      this.isLoading = false
      this.$router.back()
    }
 },
}
</script>
<style>
@import "~vue2-editor/dist/vue2-editor.css";
.ql-snow .ql-toolbar button svg, .quillWrapper .ql-snow.ql-toolbar button svg {
  height: 17px !important;
  width: 17px !important
}
.ql-snow .ql-picker {
 font-size: 12px !important;
}
.quillWrapper .ql-picker-label {
 font-size: 12px !important;
}
.ql-editor {
 font-size: 14px !important;
}
.ql-toolbar.ql-snow .ql-formats {
 margin-right: 0 !important;
}
</style>