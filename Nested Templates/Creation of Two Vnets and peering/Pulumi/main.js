const pulumi = require("@pulumi/pulumi");
const azure = require("@pulumi/azure");
const nsg = require("./NSG.js"); 
const vnet = require("./V-NET.js");
const peer=require("./peering.js");



for(i=1;i<=3;i++)
{
let nsg1=new nsg.NSG("East US","PulumiRG","N"+i,i);
}

for(i=4;i<=6;i++)
{
let nsg2=new nsg.NSG("West US","PulumiRG","N"+i,i);
}



 const v1=new vnet.VNET("V1","East US","PulumiRG","N1","N2","N3","10.0.0.0/16","10.0.0.0/24","10.0.1.0/24","10.0.2.0/24","1");
 const v2=new vnet.VNET("V2","West US","PulumiRG","N4","N5","N6","15.0.0.0/16","15.0.0.0/24","15.0.1.0/24","15.0.2.0/24","2");


 /*const v1 = new azure.network.VirtualNetwork("L1", {
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


const p1= new peer.peering("V1toV2",v1id,v2name,"PulumiRG");
const p2= new peer.peering("V2toV1",v2id,v1name,"PulumiRG");



