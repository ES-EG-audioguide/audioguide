'use strict';

const AUDIOPATH = './res/audio/';

const model = {

    audioMap: new Map(
        [
            ['7160', [
                {
                    title: 'Info Chromatographie',
                    path: 'Chroma/Chroma_Info.mp3',
                    type: 'audio/mp3'
                },
                {
                    title: 'Hinweis 1',
                    path: 'Chroma/Chroma_Tipp1.mp3',
                    type: 'audio/mp3'
                }]
            ],
            ['9342', [
                {
                    title: 'Info Chromatographie',
                    path: 'Chroma/Chroma_Info.mp3',
                    type: 'audio/mp3'
                },
                {
                    title: 'Hinweis 1',
                    path: 'Chroma/Chroma_Tipp1.mp3',
                    type: 'audio/mp3'
                }]
            ],
            ['4206', [
                {
                    title: 'Info Codesonne',
                    path: 'Codesonne/Codesonne_Info.mp3',
                    type: 'audio/mp3'
                },
                {
                    title: 'Hinweis 1',
                    path: 'Codesonne/Codesonne_Tipp1.mp3',
                    type: 'audio/mp3'
                },
                {
                    title: 'Hinweis 2',
                    path: 'Codesonne/Codesonne_Tipp2.mp3',
                    type: 'audio/mp3'
                },
                {
                    title: 'Hinweis 3',
                    path: 'Codesonne/Codesonne_Tipp3.mp3',
                    type: 'audio/mp3'
                }]
            ],
            ['sun', [
                {
                    title: 'Persönliche Nachricht',
                    path: 'PW/PW.mp3',
                    type: 'audio/mp3'
                }]
            ],
            ['438', [
                {
                    title: 'Persönliche Nachricht',
                    path: 'PW/PW.mp3',
                    type: 'audio/mp3'
                }]
            ],
            ['5291', [
                {
                    title: 'Info Graphen',
                    path: 'Graphen/Graphen_Info.mp3',
                    type: 'audio/mp3'
                },
                {
                    title: 'Hinweis 1',
                    path: 'Graphen/Graphen_Tipp1.mp3',
                    type: 'audio/mp3'
                },
                {
                    title: 'Hinweis 2',
                    path: 'Graphen/Graphen_Tipp2.mp3',
                    type: 'audio/mp3'
                },
                {
                    title: 'Hinweis 3',
                    path: 'Graphen/Graphen_Tipp3.mp3',
                    type: 'audio/mp3'
                }]
            ],
            ['0007', [
                {
                    title: 'Info Kombinatorik',
                    path: 'Kombinatorik/Kombinatorik_Info.mp3',
                    type: 'audio/mp3'
                },
                {
                    title: 'Hinweis 1',
                    path: 'Kombinatorik/Kombinatorik_Tipp1.mp3',
                    type: 'audio/mp3'
                }]
            ],
            ['1024', [
                {
                    title: 'Info Strom',
                    path: 'Strom/Strom_Info.mp3',
                    type: 'audio/mp3'
                },
                {
                    title: 'Hinweis 1',
                    path: 'Strom/Strom_Tipp1.mp3',
                    type: 'audio/mp3'
                },
                {
                    title: 'Hinweis 2',
                    path: 'Strom/Strom_Tipp2.mp3',
                    type: 'audio/mp3'
                },
                {
                    title: 'Hinweis 3',
                    path: 'Strom/Strom_Tipp3.mp3',
                    type: 'audio/mp3'
                }]
            ],
            ['8688', [
                {
                    title: 'Willkommen',
                    path: 'Willkommen/Willkommen_Info.mp3',
                    type: 'audio/mp3'
                },
                {
                    title: 'Hinweis 1',
                    path: 'Willkommen/Willkommen_Tipp1.mp3',
                    type: 'audio/mp3'
                },
                {
                    title: 'Hinweis 2',
                    path: 'Willkommen/Willkommen_Tipp2.mp3',
                    type: 'audio/mp3'
                }]
            ],
            [
                '2156', [
                {
                    title: 'Info Funk Frequenzen',
                    path: 'Funk/Funk_Info.mp3',
                    type: 'audio/mp3'
                },
                {
                    title: 'Hinweis 1',
                    path: 'Funk/Funk_Tipp1.mp3',
                    type: 'audio/mp3'
                },
                {
                    title: 'Hinweis 2',
                    path: 'Funk/Funk_Tipp2.mp3',
                    type: 'audio/mp3'
                },
                {
                    title: 'Hinweis 3',
                    path: 'Funk/Funk_Tipp3.mp3',
                    type: 'audio/mp3'
                }]
            ],
            [
                '3445', [
                {
                    title: 'Sechseckige Harmonie',
                    path: 'Optic/Optic_Info.mp3',
                    type: 'audio/mp3'
                },
                {
                    title: 'Hinweis 1',
                    path: 'Optic/Optic_Tipp1.mp3',
                    type: 'audio/mp3'
                },
                {
                    title: 'Hinweis 2',
                    path: 'Optic/Optic_Tipp2.mp3',
                    type: 'audio/mp3'
                },
                {
                    title: 'Hinweis 3',
                    path: 'Optic/Optic_Tipp3.mp3',
                    type: 'audio/mp3'
                }]
            ],
            ['666', [
                {
                    title: '666',
                    path: 'test.aac',
                    type: 'audio/aac'
                }]
            ]]
    ),

    getAudioObj(id, callback) {
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
        model.getAudioObj(audioObjId, function (result) {
            let page = view.renderAudioObj(result);
            helper.replace(page);
        })
    },

    clear() {
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
        for (let sample of audioObj) {
            let sampleTemp = document.getElementById('audiosample').cloneNode(true);
            sampleTemp.removeAttribute('id');
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
        for (let sampleAttr in sample) {
            temp.innerHTML = temp.innerHTML.replace("%" + sampleAttr, sample[sampleAttr]);
        }
        temp.getElementsByTagName('audio')[0].getElementsByTagName('source')[0].src = AUDIOPATH + sample.path;
        temp.getElementsByTagName('audio')[0].title = sample.title;
    },

};

(function () {
    window.addEventListener('DOMContentLoaded', presenter.init, false);
})();

function onSearchInputChar() {
    let searchBar = document.getElementById("search");
    let userInput = String(searchBar.value).toLowerCase();

    if (model.audioMap.has(userInput)) {
        presenter.createAudioObj(userInput);
        searchBar.classList.add("correctSearch");
        searchBar.classList.remove("wrongSearch");
    } else {
        presenter.clear();
        searchBar.classList.add("wrongSearch");
        searchBar.classList.remove("correctSearch");
    }
};
