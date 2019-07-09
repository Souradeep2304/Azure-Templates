const pulumi = require("@pulumi/pulumi");
const azure = require("@pulumi/azure"); 
const vnet = require("./V-NET.js");
const peer=require("./peering.js");
const web=require("./webNSG.js");
const api=require("./apiNSG.js");
const db=require("./dbNSG.js");




const nsg1=new web.NSG("East US","PulumiRG","K1",1,"10.0.0.0/24","10.0.1.0/24","10.0.2.0/24");
const nsg2=new api.NSG("East US","PulumiRG","K2",2,"10.0.0.0/24","10.0.1.0/24","10.0.2.0/24");
const nsg3=new db.NSG("East US","PulumiRG","K3",3,"10.0.0.0/24","10.0.1.0/24","10.0.2.0/24");



const nsg4=new web.NSG("West US","PulumiRG","K4",4,"15.0.0.0/24","15.0.1.0/24","15.0.2.0/24");
const nsg5=new api.NSG("West US","PulumiRG","K5",5,"15.0.0.0/24","15.0.1.0/24","15.0.2.0/24");
const nsg6=new db.NSG("West US","PulumiRG","K6",6,"15.0.0.0/24","15.0.1.0/24","15.0.2.0/24");



const nsg1id=nsg1.nsgid;
const nsg2id=nsg2.nsgid;
const nsg3id=nsg3.nsgid;
const nsg4id=nsg4.nsgid;
const nsg5id=nsg5.nsgid;
const nsg6id=nsg6.nsgid;





 let v1=new vnet.VNET("V1","East US","PulumiRG","10.0.0.0/16",nsg1id,nsg2id,nsg3id,"10.0.0.0/24","10.0.1.0/24","10.0.2.0/24",1);
 let v2=new vnet.VNET("V2","West US","PulumiRG","15.0.0.0/16",nsg4id,nsg5id,nsg6id,"15.0.0.0/24","15.0.1.0/24","15.0.2.0/24",2);

/*
 const v1 = new azure.network.VirtualNetwork("L1", {
         addressSpaces: ["19.0.1.0/24"],
         location: "West US",
         name: "V1",
         resourceGroupName: "PulumiRG",
     });
     const v2 = new azure.network.VirtualNetwork("L2", {
         addressSpaces: ["19.0.2.0/24"],
         location: "West US",
         name: "V2",
         resourceGroupName: "PulumiRG",
     });

*/
const v1id=v1.vnetid;
const v2id=v2.vnetid;
 
const v1name=v1.vname;
const v2name=v2.vname;


const p1= new peer.peering("V1toV2",v2id,v1name,"PulumiRG",1);
const p2= new peer.peering("V2toV1",v1id,v2name,"PulumiRG",2);



