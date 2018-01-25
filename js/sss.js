class Dialog {
    constructor(title = "标题", text = "今天是美好的一天!") {
        this.title = title;
        this.text = text;
        this.init();
    }

    init() {
        this.next();
    }


    next() {    
        let bigdiv = document.createElement("div");
        bigdiv.className = "box";
        let texts = this.createTitle();
        bigdiv.append(texts);
        let ortext = this.orok();
        
        bigdiv.append(ortext);
    
        document.body.append(bigdiv);
        this.addEvent();
    }

    show() {
        // let bigdiv = document.querySelectorAll(".box")[0];
        // bigdiv.style.display = "block";
    }


    hide() {
        let bigdiv = document.querySelectorAll(".box")[0];
        bigdiv.style.display = "none";
    }




    addEvent() {
        let span = document.querySelectorAll(".ftr")[0];
        let btn1 = document.querySelectorAll(".success")[0];
        let btn2 = document.querySelectorAll(".success")[1];

        span.addEventListener("click", (event) => {
            this.hide();
        });
        btn1.addEventListener("click", (event) => {
            this.hide();
        });

    }


    butn1(txt, cls) {
        let btn1 = document.createElement("button");
        btn1.innerHTML = txt;
        btn1.className = cls
        return btn1;
    }



    
    butn2(txt, cls) {
        let btn2 = document.createElement("button");
        btn2.innerHTML = txt;
        btn2.className = cls
        return btn2;
    }


    createTitle() {
        let ol = document.createElement("ol");
        ol.className = "box-title";
        let span = document.createElement("span");
        ol.innerHTML = this.title;
        span.className = "ftr";

        span.innerHTML = "×";
        ol.append(span);
        return ol;
    }


    orok() {

        let ul = document.createElement("ul");
        let btn1 = this.butn1("确定", "success");
        let btn2 = this.butn2("取消", "success");
        btn1.className = "ftr";

        ul.className = "boxtext";
        ul.innerHTML = this.text;

        ul.append(btn1);
        ul.append(btn2);

        return ul;
    }





}
let box = new Dialog();