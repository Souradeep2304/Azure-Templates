"use strict";
const pulumi = require("@pulumi/pulumi");
const azure = require("@pulumi/azure");


class NSG extends pulumi.ComponentResource{
    constructor(location,rg,nsgname,i,s1,s2,s3){
        super(location,rg,nsgname,i,s1,s2,s3);
        const nsg = new azure.network.NetworkSecurityGroup("L"+i, {
            location: location,
            name: nsgname,
            resourceGroupName: rg,
            securityRules:[{
                "name": "HTTPorHTTPS",
            
                    "description": "HTTP/S rule",
                    "protocol": "Tcp",
                    "sourcePortRange": "*",
                    "destinationPortRanges": ["80","443"],
                    "sourceAddressPrefix": "*",
                    "destinationAddressPrefixes": [s1],
                    "access": "Allow",
                    "priority": 100,
                    "direction": "Inbound"
                
            },

            {
                "name": "DenyCommToDatabase",
           
                    "description": "To Deny Communication to Database Subnet",
                    "protocol": "Tcp",
                    "sourcePortRange": "*",
                    "destinationPortRange": "*",
                    "sourceAddressPrefix": "*",
                    "destinationAddressPrefixes":[ s3],
                    "access": "Deny",
                    "priority": 100,
                    "direction": "Outbound"
                
            },
            {
                "name": "WEBtoAPI",
             
                    "description": "Communication between WEB and API subnet",
                    "protocol": "Tcp",
                    "sourcePortRange": "*",
                    "destinationPortRanges": ["81","445"],
                    "sourceAddressPrefixes": [s1],
                    "destinationAddressPrefixes": [s2],
                    "access": "Allow",
                    "priority": 110,
                    "direction": "Outbound"
                
            }

        ]

        },
        {
            parent: this
});
this.nsgid=nsg.id;
    }
}

module.exports.NSG=NSG;