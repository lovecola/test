/*需求一：鼠标滑过父级菜单项，子div显示/隐藏*/
function hoverSub(parent,display) {
    var div=parent.querySelector("div");
    div.style.display=display;
}
/*需求二：鼠标进入子div时，需要保持父菜单项始终保持hover的状态*/
function keepHover(child,isHover) {
    var label=child.parentNode.querySelector("label");
    label.className=isHover?label.className+" hover":"rt";
    var a=label.querySelector("a");
    a.className=isHover?"hover":"";
}
/*功能二：全部商品分类*/
//弹出一级菜单
function hoverAllCate(parent,display) {
    var allCate=parent.querySelector("#all_cate");
    allCate.style.display=display;
}
//弹出二级菜单
function hoverSubCate(parent,display) {
    var subCate=parent.querySelector(".sub_cate_box");
    subCate.style.display=display;
}
//保持一级菜单的hover状态
function keepH3Hover(child,isHover) {
    var h3=child.parentNode.querySelector("h3");
    h3.className=isHover?"hover":"";
}

/*小图预览区域的图片轮换*/
const LIWIDTH=62;
var moved=0; //移动次数
var iconList=document.getElementById("icon_list");
var count=iconList.getElementsByTagName("li").length;
function move(btn){
    if(btn.className.indexOf('_disabled')==-1){
        moved=btn.id=="btnRight"?moved+1:moved-1;
        iconList.style.left=moved*LIWIDTH*(-1)+'px';
        btnEnabled();
    }
}
var btnLeft=document.getElementById("btnLeft");
var btnRight=document.getElementById("btnRight");
function btnEnabled(){
    if(moved==0) {
        btnLeft.className="left_disabled";
    }else if(moved==count-5) {
        btnRight.className="right_disabled";
    }else {
        btnLeft.className="left";
        btnRight.className="right";
    }
}

/*鼠标悬停小图片,显示中图片*/
var imgList=iconList.getElementsByTagName('img');
var mImg=document.getElementById('mImg');
for(var i=0; i<imgList.length; i++){
    imgList[i].onmouseover=changeMImage;
}
function changeMImage(){//当鼠标悬停在小图片上时更改中等产品图片
    //...\product-s1.jpg-->...\product-s1-m.jpg
    var dot=this.src.lastIndexOf('.');
    var mSrc=this.src.substring(0,dot)+'-m'+this.src.substring(dot);
    mImg.src=mSrc;
}

/*中图片局部放大*/
//可显示的175x175的半透明遮罩层
var mask=document.getElementById('mask');
//显示产品大图的区块
var largeDiv=document.getElementById('largeDiv');
//鼠标进入，显示大图：
function showMask(){
    mask.style.display="block";
    var mImgSrc=document.getElementById('mImg').src;
    //...\product-s1-m.jpg-->...\product-s1-l.jpg
    var d=mImgSrc.lastIndexOf('.');
    var largeSrc=mImgSrc.substring(0,d-1)+'l'+mImgSrc.substring(d);
    largeDiv.style.backgroundImage='url('+largeSrc+')';
    largeDiv.style.display='block';
}
function hideMask(){
    mask.style.display='none';
    largeDiv.style.display='none';
}

//鼠标移动，改变大图背景位置
var width=350;//mask活动区域的宽
var height=350;//mask活动区域的高
function zoom(event){
    //获取鼠标当前坐标-遮罩层的一半=遮罩层的坐标
    var left=event.offsetX-175/2;
    //遮罩层最左边不能<0,最右边不能超出容器宽-175
    left=left>width-175?(width-175):left>0?left:0;
    var top=event.offsetY-175/2;
    //遮罩层最上边不能<0,最下边不能超出容器高-175
    top=top>height-175?height-175:top>0?top:0;
    mask.style.left=left+'px';
    mask.style.top=top+'px';
    /***控制大图预览区***/
    largeDiv.style.backgroundPositionX=left*2*(-1)+'px';
    largeDiv.style.backgroundPositionY=top*2*(-1)+'px';
}

/*显示更多“分享到”按钮*/
function showMoreShares(aMore){
    var isBack=aMore.className.indexOf("back")==-1;
    var divObj=aMore.parentNode;
    divObj.style.width=isBack?"200px":"155px";
    var linkNodes=divObj.getElementsByTagName("a");
    for(var i=3;i<linkNodes.length-1;i++){
        linkNodes[i].style.display=isBack?"block":"none";
    }
    aMore.className=isBack?aMore.className+" back":"share_more";
}

/*送货地区选择框，鼠标进入时*/
function storeHover(display) {
    var sel=document.querySelector("#store_select div");
    sel.className=display=="block"?
    sel.className+" textHover":"text";
    sel.parentNode.querySelector("#store_close")
        .style.display=display;
    sel.parentNode.querySelector("#store_content")
        .style.display=display;
}

/*送货地址选择框：选择不同的页签*/
function storeTabsChanged(index){
    var tabs=document.querySelectorAll("#store_tabs li");
    for(var i=0;i<tabs.length;i++){
        tabs[i].className=i==index?"hover":"";
    }
}

/*显示minicart*/
function showMiniCart(miniCart,display) {
    miniCart.className=display=="block"?"minicart":"";
    miniCart.querySelector("div").style.display=display;
}

/*产品介绍里的页签切换*/
var tabsArray=
    ["product_info","product_data","product_package","product_saleAfter"];
function showTab(li, index){
    var lis=li.parentNode.getElementsByTagName("li");
    for(var i=0;i<lis.length;i++){ lis[i].className=""; }
    li.className="current";
    if(index!=-1){
        for (var i=0;i<tabsArray.length;i++){
            var tabDiv=document.getElementById(tabsArray[i]);
            tabDiv.style.display=i==index?"block":"none";
        }
    }else{
        for (var i=0;i<tabsArray.length;i++){
            var tabObj = document.getElementById(tabsArray[i]);
            tabObj.style.display = "none";
        }
    }
}

/*是否显示回复*/
function showReply(aObj) {
    var node = aObj.parentNode.parentNode.nextSibling.nextSibling;
    node.style.display=node.style.display=="none"?"block":"none";
}



