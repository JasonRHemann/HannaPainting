const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector("#submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

const publicKey = "BTsAMBYj89_Ije_PO";
const serviceID = "service_znvtx9n";
const templateID = "template_nr2b2ne";

emailjs.init(publicKey);

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  submitBtn.innerText = "Just A Moment...";

  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  emailjs.send(serviceID, templateID, inputFields).then(
    () => {
      submitBtn.innerText = "Message Sent Successfully";
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    },
    (error) => {
      console.log(error);
      submitBtn.innerText = "Something went wrong";
    }
  );
});
