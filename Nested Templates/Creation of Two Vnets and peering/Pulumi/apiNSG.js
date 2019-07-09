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
            securityRules:[{
                "name": "HTTPfromWEB",
            
                    "description": "To accept HTTP connection from WEB subnet",
                    "protocol": "Tcp",
                    "sourcePortRange": "*",
                    "destinationPortRanges":[ "80","443"],
                    "sourceAddressPrefixes": [s1],
                    "destinationAddressPrefixes": [s2],
                    "access": "Allow",
                    "priority": 100,
                    "direction": "Inbound"
                
            },
            {
                "name": "DATABASEtoAPI",
  
                    "description": "Inbound connnection from DATABASE subnet to API subnet.",
                    "protocol": "Tcp",
                    "sourcePortRanges": ["80","443"],
                    "destinationPortRanges": ["81","445"],
                    "sourceAddressPrefixes": [s3],
                    "destinationAddressPrefixes": [s2],

                    "access": "Allow",
                    "priority": 110,
                    "direction": "Inbound"
                
            },
            {
                "name": "FTPin",
        
                    "description": "FTP connection from DATABASE subnet.",
                    "protocol": "Tcp",
                    "sourcePortRange": "*",
                    "destinationPortRange": "21",
                    "sourceAddressPrefixes": [s3],
                    "destinationAddressPrefixes": [s2],
                    "access": "Allow",
                    "priority": 120,
                    "direction": "Inbound"
                
            },
            {
                "name": "APItoDATABASE",
            
                    "description": "MySQL connection to DATABASE subnet from API subnet",
                    "protocol": "Tcp",
                    "sourcePortRange": "*",
                    "destinationPortRange": "3306",
                    "sourceAddressPrefixes": [s2],
                    "destinationAddressPrefixes": [s3],
                    "access": "Allow",
                    "priority": 100,
                    "direction": "Outbound"
                
            },
            {
                "name": "APItoWEB",
     
                    "description": "HTTP/S connection from API to WEB subnet.",
                    "protocol": "Tcp",
                    "sourcePortRange": "*",
                    "destinationPortRanges": ["82","446"],
                    "sourceAddressPrefixes": [s2],
                    "destinationAddressPrefixes": [s1],
                    "access": "Allow",
                    "priority": 110,
                    "direction": "Outbound"
                
            },
            {
                "name": "FTP",
             
                    "description": "FTP connection from API subnet to DATABASE subnet.",
                    "protocol": "Tcp",
                    "sourcePortRange": "*",
                    "destinationPortRanges": ["21"],
                    "sourceAddressPrefixes": [s2],
                    "destinationAddressPrefixes": [s3],
                    "access": "Allow",
                    "priority": 120,
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