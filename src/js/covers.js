const refs = {  
    coversWrapperListItem: document.querySelectorAll('.covers-wrapper-list-item'),
    coversContent: document.querySelector('.covers-content'),
};
  
const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {    
        for (let i = 0; i < refs.coversWrapperListItem.length; i += 1) {
        refs.coversWrapperListItem[i].classList.add('covers-animation');    
    }
    } else {    
        for (let i = 0; i < refs.coversWrapperListItem.length; i += 1) {
        refs.coversWrapperListItem[i].classList.remove('covers-animation');    
    }
    }});
  observer.observe(refs.coversContent);