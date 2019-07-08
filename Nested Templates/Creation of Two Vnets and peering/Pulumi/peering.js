"use strict";
const pulumi = require("@pulumi/pulumi");
const azure = require("@pulumi/azure");

class peering extends pulumi.ComponentResource{

    constructor(pname,v2,v1,rg,i){
        super(pname,v1,v2,rg,i);
        const peering=new azure.network.VirtualNetworkPeering("P"+i,{
            name: pname,
      remoteVirtualNetworkId: v2,
      resourceGroupName: rg,
      virtualNetworkName: v1,
        },
        {
            parent: this
    });
    }

}

module.exports.peering = peering;