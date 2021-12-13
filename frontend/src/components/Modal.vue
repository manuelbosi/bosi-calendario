<template>
  <div class="modal-backdrop" role="dialog">
    <div class="modal-content">
      <div class="modal-header">
        <slot name="title">
          MODAL TITLE
        </slot>
        <div class="close-modal" @click="$emit('close')"><i class="fas fa-times"></i></div>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div class="modal-footer">
        <slot name="footer">
          FOOTER
        </slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Modal",
  emits: ['close'],
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
  z-index: 99999999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  padding: 10px;
  width: 600px;
  height: 600px;
  background-color: #eee;
  border: 2px solid #08557a;
  /*box-shadow: 0 0 5px 0 rgba(44,181,224,1);*/
  /*-webkit-box-shadow: 0 0 5px 0 rgba(44,181,224,1);*/
  /*-moz-box-shadow: 0 0 5px 0 rgba(44,181,224,1);*/
}
.close-modal {
  background-color: #1a202c;
  color: white;
  padding: 15px;
  border-radius: 80px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>