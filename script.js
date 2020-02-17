class Node {
  constructor(data,namepod, next, back, ) {
    this.data = data;
    this.namepod = namepod;
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
  }

  insertFirst(data,name) {
    this.head = new Node(data,name, this.head);
    this.current = this.head;
    this.pod.push(this.head.data)
    this.title.push(this.head.namepod)
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


  }

  moveBack() {
    if (this.size === 0) {
      this.size = this.pod.length - 1;
    } else {
      this.size--;
    }

    this.show = this.pod[this.size];
    this.showtitle = this.title[this.size];


  }



  clearList() {
    this.head = null;
    this.size = 0;
  }


  printpod() {
    // var aud = document.getElementById('player')
    // var s2 = parseInt(aud.duration % 60);
    // var m2 = parseInt((aud.duration / 60) % 60);
    // var h2 = parseInt(((aud.duration / 60) / 60) % 60);
    return '<h4>' + this.showtitle + '</h4><div class="coll"><audio id="player" onloadedmetadata="mDur()" ontimeupdate="mPlay()" src="' + this.show + '"></audio><input class="e-range" id="seek" type="range" name="rng" min="0" step="0.25" value="0" onchange="mSet()" style="width: 248px"><ul class="timee"><li><span id="duration">00:00:00</span></li><li><i>/</i></li><li><span id="dur2"></span></li></ul></div>';
  }


  printListData() {
    if (this.current)
      return this.current.data;
    else
      return "No Data";
  }

  printListpod() {
    if (this.current){
      return '<h4>'+this.head.namepod+'</h4><div class="coll"><audio id="player" onloadedmetadata="mDur()" ontimeupdate="mPlay()" src="' + this.head.data + '"></audio><input class="e-range" id="seek" type="range" name="rng" min="0" step="0.25" value="0" onchange="mSet()" style="width: 248px"><ul class="timee"><li><span id="duration">00:00:00</span></li><li><i>/</i></li><li><span id="dur2"></span></li></ul></div>';
    }

    else {
      return "No Data";
  }
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
  list.insertFirst(document.getElementById("epnum").value,document.getElementById("epname").value);
  let aud = document.getElementById('player')
  let s2 = parseInt(aud.duration % 60);
  let m2 = parseInt((aud.duration / 60) % 60);
  let h2 = parseInt(((aud.duration / 60) / 60) % 60);
  document.getElementById('podresult').innerHTML = list.printListpod();
  
dur2.innerHTML = pad2(h2) + ':' + pad2(m2) + ':' + pad2(s2);
  
}

function Nextpodcast() {
  list.Next();

  let aud = document.getElementById('player')
  let s2 = parseInt(aud.duration % 60);
  let m2 = parseInt((aud.duration / 60) % 60);
  let h2 = parseInt(((aud.duration / 60) / 60) % 60);

  document.getElementById('podresult').innerHTML = list.printpod();
  dur2.innerHTML = pad2(h2) + ':' + pad2(m2) + ':' + pad2(s2);

}



function Backpodcast() {
  list.moveBack();
  let aud = document.getElementById('player')
  let s2 = parseInt(aud.duration % 60);
  let m2 = parseInt((aud.duration / 60) % 60);
  let h2 = parseInt(((aud.duration / 60) / 60) % 60);

  document.getElementById('podresult').innerHTML = list.printpod();
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