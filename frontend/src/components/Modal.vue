<template>
  <div class="modal-backdrop one two three" role="dialog" @click="$emit('close', $event)">
    <div class="modal-content">
      <div class="modal-header">
        <slot name="title">
          MODAL TITLE
        </slot>
        <div><i class="fas fa-times close-modal"></i></div>
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
  /*height: 600px;*/
  background-color: #eee;
  border: 2px solid #08557a;
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