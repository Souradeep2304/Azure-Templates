const pulumi = require("@pulumi/pulumi");
const azure = require("@pulumi/azure");
const nsg = require("./NSG.js"); 
const vnet = require("./V-NET.js");



for(i=1;i<=3;i++)
{
let nsg1=new nsg.NSG("East US","PulumiRG","N"+i,i);
}

for(i=4;i<=6;i++)
{
let nsg2=new nsg.NSG("West US","PulumiRG","N"+i,i);
}



// let vnet1=new vnet.VNET("V1","East US","PulumiRG","N1","N2","N3","10.0.0.0/16","10.0.0.0/24","10.0.1.0/24","10.0.2.0/24","1");
// let vnet2=new vnet.VNET("V2","West US","PulumiRG","N4","N5","N6","15.0.0.0/16","15.0.0.0/24","15.0.1.0/24","15.0.2.0/24","2");







