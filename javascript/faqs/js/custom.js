var faqquestion = document.querySelectorAll('.faqquestion');

faqquestion.forEach((element,index) => {

    element.addEventListener('click',(event) => {

        if(event.target.children[0].innerText == '+'){
            event.target.children[0].innerText = '-';
        } else {
            event.target.children[0].innerText = '+';
        }

        event.target.nextElementSibling.classList.toggle('display');

        faqquestion.forEach((elements,indexs) => {
            if(element != elements){
                elements.nextElementSibling.classList.add('display');
                elements.children[0].innerText = '+';
            }
        })
    })
})