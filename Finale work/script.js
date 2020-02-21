class Node {
  constructor(data,namepod,descrpod, next, back, ) {
    this.data = data;
    this.namepod = namepod;
    this.descrpod = descrpod;
    this.next = next || null;
    this.back = back || null;

  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.current = null;
    this.pod = ['https://dts.podtrac.com/redirect.mp3/rss.art19.com/episodes/904b9705-244e-4988-a8f1-61c29b3f25b5.mp3', 'https://dts.podtrac.com/redirect.mp3/rss.art19.com/episodes/03f4c01f-a861-4cec-bbe7-d8f517f5ead4.mp3'];
    this.show = this.pod[0];
    this.title = ['IMPAULSIVE EP. 156', 'IMPAULSIVE EP. 157']
    this.showtitle = this.title[0]
    this.descr = ['In this episode, Mike becomes the second person to walk off the set after a heated fight between the boys. Also, Logan addresses the girl who spit on him at Berkeley, the Antonio Brown diss track, and the Kobe Bryant tragedy.','2In this episode, Mike becomes the second person to walk off the set after a heated fight between the boys. Also, Logan addresses the girl who spit on him at Berkeley, the Antonio Brown diss track, and the Kobe Bryant tragedy.']
    this.showdescr = this.descr[0];

    this.pod2 = ['http://traffic.libsyn.com/h3h3roost/H3_Podcast_176_AUDIO.mp3?dest-id=556650', 'http://traffic.libsyn.com/h3h3roost/H3_Podcast_174_-_papa_john_AUDIO.mp3?dest-id=556650'];
    this.show2 = this.pod2[0];
    this.title2 = ['H3 PODCAST 134', 'H3 PODCAST 135']
    this.showtitle2 = this.title2[0]
    this.descr2 = ['H3H3Productions is a YouTube channel produced by husband and wife duo Ethan Edward Klein (born June 25, 1985) and Hila Klein,The name h3h3 was initially supposed to be "HEHE" due to the couple\'s initials, but because the username was taken, they opted for h3h3.','On this episode of the H3 Podcast we interview Papa John. Yep. Papa bless.']
    this.showdescr2 = this.descr2[0];

    this.pod3 = ['https://rss.art19.com/episodes/62269ad7-892f-40da-baec-57213d62d370.mp3', 'https://rss.art19.com/episodes/d1a9301a-2f69-48ff-805e-1f8e427582da.mp3'];
    this.show3 = this.pod3[0];
    this.title3 = ['Tim Ferriss Show Ep. 344', 'Tim Ferriss Show Ep. 345']
    this.showtitle3 = this.title3[0]
    this.descr3 = ['Richard TurnerI am very, very excited to introduce this interview, as I\'ve been wanting to meet today\'s guest, Richard Turner, for almost two years now. I first came across Richard Turner (richardturner52.com, youtube.com/richardturner52) in the documentary Dealt, directed by Luke Korem.I can\'t remember the last time I finished a documentary, only to want to watch it again immediately afterward.','"We chase extraordinary moments instead of being grateful for ordinary moments until hard shit happens. And then in the face of really hard stuff — illness, death, loss — the only thing we\'re begging for is a normal moment." — Brené BrownDr. Brené Brown (@BreneBrown) is a research professor at the University of Houston where she holds the Huffington Foundation – Brené Brown Endowed Chair at The Graduate College of Social Work. Brené is also a visiting professor in management at The University of Texas at Austin McCombs School of Business.']
    this.showdescr3 = this.descr3[0];
  }

  insertFirst(data,name,descr) {
    this.head = new Node(data,name,descr, this.head);
    this.current = this.head;
    this.pod.push(this.head.data)
    this.title.push(this.head.namepod)
    this.descr.push(this.head.descrpod)

    this.pod2.push(this.head.data)
    this.title2.push(this.head.namepod)
    this.descr2.push(this.head.descrpod)

    this.pod3.push(this.head.data)
    this.title3.push(this.head.namepod)
    this.descr3.push(this.head.descrpod)
    this.size++;
  }

  Next() {
    if (this.size === this.pod.length - 1) {
      this.size = 0;
    } else {
      this.size++;
    }
    this.show = this.pod[this.size];
    this.showtitle = this.title[this.size];
    this.showdescr = this.descr[this.size];



  }

  Next2() {
    if (this.size === this.pod2.length - 1) {
      this.size = 0;
    } else {
      this.size++;
    }
    
    this.show2 = this.pod2[this.size];
    this.showtitle2 = this.title2[this.size];
    this.showdescr2 = this.descr2[this.size];
  }

  Next3() {
    if (this.size === this.pod3.length - 1) {
      this.size = 0;
    } else {
      this.size++;
    }
    
    this.show3 = this.pod3[this.size];
    this.showtitle3 = this.title3[this.size];
    this.showdescr3 = this.descr3[this.size];
  }

  moveBack() {
    if (this.size === 0) {
      this.size = this.pod.length - 1;
    } else {
      this.size--;
    }

    this.show = this.pod[this.size];
    this.showtitle = this.title[this.size];
    this.showdescr = this.descr[this.size];
  }

  moveBack2() {
    if (this.size === 0) {
      this.size = this.pod2.length - 1;
    } else {
      this.size--;
    }
    this.show2 = this.pod2[this.size];
    this.showtitle2 = this.title2[this.size];
    this.showdescr2 = this.descr2[this.size];


  }

  moveBack3() {
    if (this.size === 0) {
      this.size = this.pod3.length - 1;
    } else {
      this.size--;
    }
    this.show3 = this.pod3[this.size];
    this.showtitle3 = this.title3[this.size];
    this.showdescr3 = this.descr3[this.size];


  }



  clearList() {
    this.head = null;
    this.size = 0;
  }


  printpod() {
  
    return '<h4>' + this.showtitle + '</h4><div class="coll"><audio id="player" onloadedmetadata="mDur()" ontimeupdate="mPlay()" src="'+this.show+'"></audio><input class="e-range" id="seek" type="range" name="rng" min="0" step="0.25" value="0" onchange="mSet()" style="width: 248px"><ul class="timee"><li><span id="duration">00:00:00</span></li><li><i>/</i></li><li><span id="dur2"></span></li></ul></div>';
  }
  printpod2() {
  
    return '<h4>' + this.showtitle2 + '</h4><div class="coll"><audio id="player" onloadedmetadata="mDur()" ontimeupdate="mPlay()" src="'+this.show2+'"></audio><input class="e-range" id="seek" type="range" name="rng" min="0" step="0.25" value="0" onchange="mSet()" style="width: 248px"><ul class="timee"><li><span id="duration">00:00:00</span></li><li><i>/</i></li><li><span id="dur2"></span></li></ul></div>';
  }
  printpod3() {
  
    return '<h4>' + this.showtitle3 + '</h4><div class="coll"><audio id="player" onloadedmetadata="mDur()" ontimeupdate="mPlay()" src="'+this.show3+'"></audio><input class="e-range" id="seek" type="range" name="rng" min="0" step="0.25" value="0" onchange="mSet()" style="width: 248px"><ul class="timee"><li><span id="duration">00:00:00</span></li><li><i>/</i></li><li><span id="dur2"></span></li></ul></div>';
  }


  printListData() {
    if (this.current)
      return this.current.data;
    else
      return "No Data";
  }
 



    
// }
printdescr(){
  return this.showdescr
}
printdescr2(){

  return this.showdescr2
}
printdescr3(){

  return this.showdescr3
}


}



let list = new LinkedList();



function addlast() {
  list.insertFirst(document.getElementById("value").value);
  document.getElementById('resu').innerHTML += '<a href="#"><img src="' + list.printListData() + '" width="375px" alt="podcast"></a>';
  document.getElementById('value').value = '';
  document.getElementById('clr').value = '';
  document.getElementById('clb').value = '';

}

function addpodcast(){
  list.insertFirst(document.getElementById("epnum").value,document.getElementById("epname").value,document.getElementById("descr").value);
  let aud = document.getElementById('player')
  let s2 = parseInt(aud.duration % 60);
  let m2 = parseInt((aud.duration / 60) % 60);
  let h2 = parseInt(((aud.duration / 60) / 60) % 60);
  // document.getElementById('podresult').innerHTML = list.printListpod();
  
dur2.innerHTML = pad2(h2) + ':' + pad2(m2) + ':' + pad2(s2);
document.getElementById('epnum').value = '';
document.getElementById('epname').value = '';
document.getElementById('descr').value = '';
}

function Nextpodcast() {
  list.Next();

  let aud = document.getElementById('player')
  let s2 = parseInt(aud.duration % 60);
  let m2 = parseInt((aud.duration / 60) % 60);
  let h2 = parseInt(((aud.duration / 60) / 60) % 60);

  document.getElementById('podresult').innerHTML = list.printpod();
  document.getElementById('showdescr').innerHTML = list.printdescr();



  dur2.innerHTML = pad2(h2) + ':' + pad2(m2) + ':' + pad2(s2);


}
function Nextpodcast2() {
  list.Next2();

  let aud = document.getElementById('player')
  let s2 = parseInt(aud.duration % 60);
  let m2 = parseInt((aud.duration / 60) % 60);
  let h2 = parseInt(((aud.duration / 60) / 60) % 60);

  document.getElementById('podresult2').innerHTML = list.printpod2();
  document.getElementById('showdescr2').innerHTML = list.printdescr2();

  dur2.innerHTML = pad2(h2) + ':' + pad2(m2) + ':' + pad2(s2);


}

function Nextpodcast3() {
  list.Next3();

  let aud = document.getElementById('player')
  let s2 = parseInt(aud.duration % 60);
  let m2 = parseInt((aud.duration / 60) % 60);
  let h2 = parseInt(((aud.duration / 60) / 60) % 60);

  document.getElementById('podresult2').innerHTML = list.printpod3();
  document.getElementById('showdescr2').innerHTML = list.printdescr3();

  dur2.innerHTML = pad2(h2) + ':' + pad2(m2) + ':' + pad2(s2);


}



function Backpodcast() {
  list.moveBack();
  let aud = document.getElementById('player')
  let s2 = parseInt(aud.duration % 60);
  let m2 = parseInt((aud.duration / 60) % 60);
  let h2 = parseInt(((aud.duration / 60) / 60) % 60);

  document.getElementById('podresult').innerHTML = list.printpod();
  document.getElementById('showdescr').innerHTML = list.printdescr();


  dur2.innerHTML = pad2(h2) + ':' + pad2(m2) + ':' + pad2(s2);

}
function Backpodcast2() {
  list.moveBack2();
  let aud = document.getElementById('player')
  let s2 = parseInt(aud.duration % 60);
  let m2 = parseInt((aud.duration / 60) % 60);
  let h2 = parseInt(((aud.duration / 60) / 60) % 60);



  document.getElementById('podresult2').innerHTML = list.printpod2();
  document.getElementById('showdescr2').innerHTML = list.printdescr2();

  dur2.innerHTML = pad2(h2) + ':' + pad2(m2) + ':' + pad2(s2);

}
function Backpodcast3() {
  list.moveBack3();
  let aud = document.getElementById('player')
  let s2 = parseInt(aud.duration % 60);
  let m2 = parseInt((aud.duration / 60) % 60);
  let h2 = parseInt(((aud.duration / 60) / 60) % 60);



  document.getElementById('podresult2').innerHTML = list.printpod3();
  document.getElementById('showdescr2').innerHTML = list.printdescr3();

  dur2.innerHTML = pad2(h2) + ':' + pad2(m2) + ':' + pad2(s2);

}


function clearall() {
  list.clearList();
  document.getElementById('resu').innerHTML = "";
  document.getElementById('resu2').innerHTML = "";
}



/************************ SeekBar *********************************/
function mDur() {
  let aud = document.getElementById('player')
  let dur = document.getElementById('seek')
  dur.max = aud.duration
}

function mPlay() {
  let aud = document.getElementById('player')
  let dur = document.getElementById('seek')
  dur.value = aud.currentTime
  let duration = document.getElementById("duration");
  
  let s = parseInt(aud.currentTime % 60);
  let m = parseInt((aud.currentTime / 60) % 60);
  let h = parseInt(((aud.currentTime / 60) / 60) % 60);
  // let s2 = parseInt(aud.duration % 60);
  // let m2 = parseInt((aud.duration / 60) % 60);
  // let h2 = parseInt(((aud.duration / 60) / 60) % 60);
  duration.innerHTML = pad2(h) + ':' + pad2(m) + ':' + pad2(s);
  // dur2.innerHTML = pad2(h2) + ':'   + pad2(m2) + ':' + pad2(s2);

}

function mSet() {
  let aud = document.getElementById('player')
  let dur = document.getElementById('seek')
  aud.currentTime = dur.value
}

function pad2(number) {
  return (number < 10 ? '0' : '') + number
}