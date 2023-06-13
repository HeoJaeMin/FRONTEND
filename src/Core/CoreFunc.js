
/**
 * Popup창 열기
 * @param {String} url 
 * @param {String} title 
 * @param {Number} width 
 * @param {Number} height 
 */
export function popup(url, width = 1200, height = 800, title){
    
    const left = document.body.offsetWidth / 2 - Number(width) / 2 + window.screenLeft;
    const top = document.body.offsetHeight / 2 - Number(height) / 2;

    //팝업 중앙정렬
    const positionInfo = "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top; 

    window.open(url, title, positionInfo);
}

export function getParameter(key){
    return new URLSearchParams(window.location.search).get(key);
}