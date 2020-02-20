





var lblassa = document.getElementById('lblassa'); 
var episodename = document.getElementById("episodename");
class Node{
  constructor(url,name){
      this.url = url;
      this.name = name;
      this.next = null;
      this.prev = null;
      this.current = null;
      console.log(this);
  }
}

class DoublyLinkedList{
  constructor(urls){
      this.url = null;
      this.name = null;
      this.current = null;
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
  push(urls,names){
    var newNode = new Node(urls,names);
    
    if(this.length === 0){
        this.head = newNode;
        this.current = newNode;
        this.tail = newNode;

    } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.current = newNode;
    }
    this.name = names;
    this.url = urls;

    this.length++;
    episodename.innerHTML = this.name;
    lblassa.innerHTML = '<div class="arrows"><i onclick="prev()" class="fa fa-chevron-left" style="font-size:36px">d</i><audio controls=""><source id="audio" src="' + this.url + '"></audio><i onclick="next()" class="fa fa-chevron-right" style="font-size:36px">d</i></div>';
    return this
  }
  nextpod(){
    if(!this.head || this.current.next == null) return undefined
    this.current = this.current.next;
    episodename.innerHTML = this.current.name;
    lblassa.innerHTML = '<div class="arrows"><i onclick="prev()" class="fa fa-chevron-left" style="font-size:36px">d</i><audio controls=""><source id="audio" src="' + this.current.url + '"></audio><i onclick="next()" class="fa fa-chevron-right" style="font-size:36px">d</i></div>';
    return this
  }
  prevpod(){
    if(!this.head || this.current.prev == null) return undefined
    this.current = this.current.prev;
    episodename.innerHTML = this.current.name;
    lblassa.innerHTML = '<div class="arrows"><i onclick="prev()" class="fa fa-chevron-left" style="font-size:36px">d</i><audio controls=""><source id="audio" src="' + this.current.url + '"></audio><i onclick="next()" class="fa fa-chevron-right" style="font-size:36px">d</i></div>';
    
  }
}
var theList = new DoublyLinkedList();
function addmusic(){
  var inp_one = document.getElementById("epnum");
  var inp_two = document.getElementById("epname");
  theList.push(inp_one.value,inp_two.value);
}
function next(){
  theList.nextpod();
}
function prev(){
theList.prevpod();
}









