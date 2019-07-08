"use strict";
const pulumi = require("@pulumi/pulumi");
const azure = require("@pulumi/azure");

class peering extends pulumi.ComponentResource{

    constructor(pname,v1,v2,rg){
        super(pname,v1,v2);
        const peering=new azure.network.VirtualNetworkPeering("P",{
            name: pname,
     remoteVirtualNetworkId: v2.id,
      resourceGroupName: rg,
      virtualNetworkName: v1.name,
        },
        {
            parent: this
    });
    }

}

module.exports.peering = peering;