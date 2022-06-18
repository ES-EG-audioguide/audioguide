'use strict';

const model = {

    audioMap: new Map(
        [[1234, [
            { 
                title: 'test1',
                path: 'test.wav',
                type: 'audio/wav'
            },
            { 
                title: 'test2',
                path: 'test.wav',
                type: 'audio/wav'
            },
            { 
                title: 'test3',
                path: 'test.wav',
                type: 'audio/wav'
            }]
        ], 
        [666, [
            { 
                title: '666',
                path: 'test.wav',
                type: 'audio/wav'
            }]
        ], 
    
    ]
    ),

    getAudioObj(id, callback){
        callback(this.audioMap.get(id));
    },
};

const presenter = {

    init() {
        presenter.initSearchbar();
    },

    initSearchbar() {
        document.getElementById("search").addEventListener("keyup", onSearchInputChar, false);
    },

    createAudioObj(audioObjId) {
        model.getAudioObj(audioObjId, function(result){
            let page = view.renderAudioObj(result);
            helper.replace(page);
    })
    },

    clear(){
        let main = document.getElementById('content');
        let content = main.firstElementChild;
        if (content) {
            content.remove();
        }
    },

};

const view = {

    renderAudioObj(audioObj) {

        let handleEvent = function (event) {
            let target = event.target;
            if (target.tagName === "BUTTON") {
                let article = target.closest('ARTICLE');
                let views = article.querySelector('.views');
                let num = views.innerHTML.match(/\d+/);
                num++;
                views.innerHTML = views.innerHTML.replace(/\d+/, num);
                presenter.showModal(parseInt(article.id), num);
            }
        };

        let page = document.createElement('div');
        let newsTemplate = document.getElementById('audiosample').cloneNode(true);

        for (let sample of audioObj) {
                let sampleTemp = newsTemplate.cloneNode(true);

                helper.fillInfos(sampleTemp, sample);

                page.append(sampleTemp);
        }

        page.addEventListener("click", handleEvent);
        return page;
    }

};


const helper = {

    replace(page) {
        let main = document.getElementById('content');
        let content = main.firstElementChild;
        if (content) {
            content.remove();
        }
        main.append(page);
    },

    fillInfos(temp, sample) {
        for(let sampleAttr in sample){
            temp.innerHTML = temp.innerHTML.replace("%" + sampleAttr, sample[sampleAttr]);
        }
    },

};

(function () {
    window.addEventListener('DOMContentLoaded', presenter.init, false);
})();

function onSearchInputChar(){
    let searchBar = document.getElementById("search");
    let userInput = parseInt(searchBar.value);
    
    if(model.audioMap.has(userInput)){
        presenter.createAudioObj(userInput);
        searchBar.classList.add("correctSearch");
        searchBar.classList.remove("wrongSearch");
    }
    else{
        presenter.clear();
        searchBar.classList.add("wrongSearch");
        searchBar.classList.remove("correctSearch");
    }
};