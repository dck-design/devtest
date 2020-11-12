<template>
  <div>
    <h1>Can we Help you?</h1>
    <form id="webForm" method="post">
      <input
        type="text"
        name="formName"
        placeholder="Name"
        required="required"
      /><br />
      <input
        type="text"
        name="formEmail"
        placeholder="Your@email.com"
        required="required"
        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
      /><br />
      <textarea
        name="formMessage"
        rows="5"
        placeholder="Message"
        required="required"
      ></textarea
      ><br />
      <input
        data-tilt
        type="submit"
        value="Send Message"
        onclick="alert('this goes nowhere XD')"
      />
    </form>
  </div>
</template>

<script>
export default { name: 'Contact' }
</script>

<style>
input,
textarea {
  font-family: inherit;
  font-size: 0.9rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.1);
  color: #333;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 5px;
}
input[type='text'],
textarea {
  width: 100%;
  max-width: 480px;
  resize: none;
}
input[type='submit'] {
  cursor: pointer;
  padding: 10px 16px;
  transition: background 0.3s;
}
input[type='submit']:hover,
input[type='submit']:focus,
input[type='text']:hover,
input[type='text']:focus,
textarea:hover,
textarea:focus {
  background: rgba(255, 255, 255, 0.2);
}
</style>
<style scoped>
h1 {
  margin-bottom: 0;
}
</style>
