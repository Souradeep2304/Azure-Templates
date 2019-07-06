"use strict";
const pulumi = require("@pulumi/pulumi");
const azure = require("@pulumi/azure");


class VNET extends pulumi.ComponentResource{
    constructor(vnetname,location,rg,nsg1,nsg2,nsg3,vspace,s1,s2,s3,k){
        super(vnetname,location,rg,nsg1,nsg2,nsg3,vspace,s1,s2,s3,k); 
        const vnet = new azure.network.VirtualNetwork("K"+k, {
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
    }
}

module.exports.VNET = VNET;