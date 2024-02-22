"use strict"

window.addEventListener("DOMContentLoaded", start)

function start(){
    console.log("JS is running");
}

const node1 = {prev: null,next: null,data: "A"}
const node2 = {prev: null,next: null,data: "B"}
const node3 = {prev: null,next: null,data: "C"}
const node4 = {prev: null,next: null,data: "D"}
const node5 = {prev: null,next: null,data: "E"}
const node6 = {prev: null,next: null,data: "F"}
const node = {prev: null,next: null,data: "G"}

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;
node3.next = node4;
node4.prev = node3;
node4.next = node5;
node5.prev = node4;
node5.next = node6;
node6.prev = node5;

class LinkedList{
    constructor(){
        this.head = node1;
        this.tail = node6;
    }
    /*
    TODO:
    get(index)                      <- har brugfor til remove
    indexof(payload)                <- har brugfor til remove
    insertafter(index, payload)
    insertbefore(index, payload)
    remove(index)                   <- igang med
    */

    get(index){
        return 0;        
    }

    remove(index){
        if(index == 0){

        } else if(index == no){

        }
    }

    first(){
        return this.head
    }

    last(){
        return this.tail;
    }

    clear(){
        this.head = null;
        this.tail = null;
    }

    add(payload){
        if(this.tail == null){
            this.head = payload;
            this.tail = payload;
        } else {
            this.tail.next = payload;
            this.tail = payload;
        }
    }

    addLast(payload){
        const node = {
            prev:this.tail,
            next: null,
            data: payload
        };

        if(this.tail == null){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    addFirst(payload){
        const node = {
            prev: null,
            next: this.head,
            data: payload
        };

        if(this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            this.head = node;
        }  
    }

    removeFirst(){
        this.head = this.head.next;
        this.head.prev.next = null;
        this.head.prev = null;
    }

    removeLast(){
        this.tail = this.tail.prev;
        this.tail.next.prev = null;
        this.tail.next = null;
    }

    removeNode(node){      
        if(this.head == node){
            console.log("I am heads")
            this.head = node.next ;
            node.next.prev = null;
            node.next = null;
        } else if(this.tail == node){
            console.log("I am tails")
            this.tail = node.prev;
            node.prev.next = null;
            node.prev = null;
        } else {
            console.log("I am not heads or tails")
            node.prev.next = node.next;
            node.next.prev = node.prev;
            node.next = null;
            node.prev = null;
        }
    }

    insertBeforeNode(payload, node){
        payload.next = node;
        payload.prev = node.prev;
        node.prev.next = payload;
        node.prev = payload;                
    }

    insertAfterNode(payload,node){
        payload.prev = node;
        payload.next = node.next;
        node.next.prev = payload;
        node.next = payload;
    }

    swapNodes(node1, node2){
        node1.next = node2.next;
        node2.next.prev = node1;
        node2.next = node1;
        node1.prev = node2;
        node2.prev = null;   
    }

    nodeAtIndex(index){
        let a_node = this.head;
        let i = 0;
        while(i != index){
            console.log("hi")
            a_node = a_node.next;
            i++;
        }
        return a_node;
    }

    dumpList(){
        let a_node = this.head;
        while(a_node != null){
            console.log(`
            node: ${a_node.data}
            -------------
                prev: ${a_node.prev?.data}
                next: ${a_node.next?.data}
            `);
            a_node = a_node.next;
        }
    }
}

const ll = new LinkedList();
console.log(ll);