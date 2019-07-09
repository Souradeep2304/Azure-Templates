"use strict";
const pulumi = require("@pulumi/pulumi");
const azure = require("@pulumi/azure");


class NSG extends pulumi.ComponentResource{
    constructor(location,rg,nsgname,i,s1,s2,s3){
        super(location,nsgname,rg,i,s1,s2,s3); 
        const nsg = new azure.network.NetworkSecurityGroup("L"+i, {
            location: location,
            name: nsgname,
            resourceGroupName: rg,
            securityRules: [{
                    "name": "InboundFromAPI",
                
                    "description": "To accept connection from API subnet",
                    "protocol": "Tcp",
                    "sourcePortRange": "*",
                    "destinationPortRange": "3306",
                    "sourceAddressPrefixes": [s2],
                    "destinationAddressPrefixes": [s3],
                    "access": "Allow",
                    "priority": 100,
                    "direction": "Inbound"
                
            },
            {
                "name": "InboundFromWEB",
             
                    "description": "Deny direct Communication between DATABASE and WEB subnets.",
                    "protocol": "Tcp",
                    "sourcePortRange": "*",
                    "destinationPortRange": "*",
                    "sourceAddressPrefixes": [s1],
                    "destinationAddressPrefixes": [s3],
                    "access": "Deny",
                    "priority": 110,
                    "direction": "Inbound"
                
            },
            {
                "name": "SSH",
              
                    "description": "SSH connection from DATABASE subnet IPs.",
                    "protocol": "Tcp",
                    "sourcePortRange": "*",
                    "destinationPortRange": "22",
                    "sourceAddressPrefixes": [s3],
                    "destinationAddressPrefixes": [s3],
                    "access": "Allow",
                    "priority": 120,
                    "direction": "Inbound"
                
            },
            {
                "name": "FTP",
               
                    "description": "FTP connection to DATABASE subnet from API subnet",
                    "protocol": "Tcp",
                    "sourcePortRange": "*",
                    "destinationPortRange": "21",
                    "sourceAddressPrefixes": [s2],
                    "destinationAddressPrefixes": [s3],
                    "access": "Allow",
                    "priority": 130,
                    "direction": "Inbound"
                
            },
            {
                "name": "DATABASEToAPI",
         
                    "description": " Connection from DATABASE to API subnet.",
                    "protocol": "Tcp",
                    "sourcePortRange": "*",
                    "destinationPortRanges": ["81","445"],
                    "sourceAddressPrefixes": [s3],
                    "destinationAddressPrefixes": [s2],
                    "access": "Allow",
                    "priority": 100,
                    "direction": "Outbound"
                
            },
            {
                "name": "FTPout",
    
                    "description": "FTP connection from DATABASE to API subnet.",
                    "protocol": "Tcp",
                    "sourcePortRange": "*",
                    "destinationPortRange": "21",
                    "sourceAddressPrefixes": [s3],
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