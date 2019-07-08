"use strict";
const pulumi = require("@pulumi/pulumi");
const azure = require("@pulumi/azure");


class NSG extends pulumi.ComponentResource{
    constructor(location,rg,nsgname,i){
        super(location,nsgname,rg,i); 
        const nsg = new azure.network.NetworkSecurityGroup("L"+i, {
            location: location,
            name: nsgname,
            resourceGroupName: rg,
        },
        {
            parent: this
});
this.nsgid=nsg.id;
    }
}

module.exports.NSG=NSG;