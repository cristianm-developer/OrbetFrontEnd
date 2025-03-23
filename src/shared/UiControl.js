

export const extendSidebarLeft = () => {
    const el = document.querySelector('#SidebarLeft');
    if(!el.classList.contains('extended'))
        el.classList.add('extended');
}

export const shrinkSidebarLeft = () => {
    const el = document.querySelector('#SidebarLeft');
    if(el.classList.contains('extended')){
        el.classList.add('hidding');
        el.classList.remove('extended');
        setTimeout(() => {
            el.classList.remove('hidding');
        }, 220);
    }
}

export const toggleAnimations = () => {
    const el = document.querySelector('#TopBar .animationButton'); 
    if(document.body.classList.contains('noAnimations')){
        document.body.classList.remove('noAnimations');
        el.classList.add('AnimationsActived')
    }
    else{
        document.body.classList.add('noAnimations');
        el.classList.remove('AnimationsActived')
    }
}

export const isTouchDevice = () => "ontouchstart" in window || navigator.maxTouchPoints > 0;
