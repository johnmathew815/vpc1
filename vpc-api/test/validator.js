//const { doesNotMatch } = require('assert');
//const assert = require('assert');
const {postVpc,getVpc,deleteVpc} = require('../controllers/implementation.js');



//describe('GET THE LIST OF VPC TEST', ()=>{
	//this.timeout(10000)

	it("GET THE LIST OF VPC - TEST", (done)=>{
		//done ();

		const code = getVpc('siva_njc','MuleSoft12345$$','7339eb19-624f-4496-a889-beb2ec98ee66', (body, statuscode)=>{
			//assert.strictEqual(statuscode , 200)
			//done ();
			//console.log(body)
			//done();
			if(statuscode != 200)
			{
				done("Test Failed")
			}
			else

			done();

		})	
	})
//})

//describe('CREATE A VPC - TEST', ()=>{
	//this.timeout(10000)

	it("CREATE A VPC - TEST", (done)=>{
		//done ();
		const content = {
			"name": "myDemoVpc",
			"region": "us-east-1",
			"cidrBlock": "10.0.0.0/24",
			"internalDns": {
			  "dnsServers": [
			  ],
			  "specialDomains": [
				
			  ]
			},
			"isDefault": false,
			"associatedEnvironments": [
			  "8936a10c-18fe-41cf-9fc3-d2579b8d07cf"
			],
			"sharedWith": [
			  
			],
			"firewallRules": [
			  {
						 "cidrBlock":"0.0.0.0/0",
						 "protocol":"tcp",
						 "fromPort":8082,
						 "toPort":8082
					  },
					  {
						 "cidrBlock":"0.0.0.0/0",
						 "protocol":"tcp",
						 "fromPort":8081,
						 "toPort":8081
					  },
					  {
						 "cidrBlock":"10.0.0.0/24",
						 "protocol":"tcp",
						 "fromPort":8091,
						 "toPort":8091
					  },
					  {
						 "cidrBlock":"10.0.0.0/24",
						 "protocol":"tcp",
						 "fromPort":8092,
						 "toPort":8092
					  }
			]
		  }
		const code = postVpc('siva_njc','MuleSoft12345$$',content, '7339eb19-624f-4496-a889-beb2ec98ee66', (body, statuscode)=>{
			//assert.strictEqual(statuscode , 200)
			//done ();
			//console.log(body)
			//done();
			if(statuscode != 400)    // change the status code letter, this is just for demo
			{
				done("Test Failed")
			}
			else

			done();
		})	
	})
//})