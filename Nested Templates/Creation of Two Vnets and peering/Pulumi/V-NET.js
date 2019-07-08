"use strict";
const pulumi = require("@pulumi/pulumi");
const azure = require("@pulumi/azure");


class VNET extends pulumi.ComponentResource{
    constructor(vnetname,location,rg,vspace,nsg1,nsg2,nsg3,s1,s2,s3,i){
        super(vnetname,location,rg,vspace,nsg1,nsg2,nsg3,s1,s2,s3,i); 
        const vnet = new azure.network.VirtualNetwork("N"+i, {
            addressSpaces: [vspace],
            
        
            location: location,
            name: vnetname,
            resourceGroupName: rg,
            subnets: [
                {
                    addressPrefix: s1,
                    name: "S1",
                    securityGroup: nsg1,
                },
                {
                    addressPrefix: s2,
                    name: "S2",
                  securityGroup: nsg2,
                },
                {
                    addressPrefix: s3,
                    name: "S3",
                    securityGroup: nsg3,
                },
            ],
            tags: {
                environment: "Public",
            },
    },
    {
        parent: this
});
this.vnetid=vnet.id;
this.vname=vnet.name;
    }
}

module.exports.VNET = VNET;