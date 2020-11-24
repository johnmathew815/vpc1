const request = require('request')
function generateToken(username,password,callback){
    request.post(
        'https://anypoint.mulesoft.com/accounts/login',
        {
          json: {
          "username" : username,
          "password" : password
      },
        },
        (error, res, body) => {
          if (error) {
            console.error(error)
            return
          }
          console.log(`statusCode: ${res.statusCode}`)
          //console.log(body)
          console.log("TOKEN GENERATED FOR AUTHENTICATION")
          callback(body)
        }
      )
}




function postVpc(username,password,generated,orgid,cb){


    generateToken(username,password,(body)=>{
        request.post({
          "headers": { "content-type": "application/json","Authorization": `Bearer ${body.access_token}` },
          "url": `https://anypoint.mulesoft.com/cloudhub/api/organizations/${orgid}/vpcs`,
          "body": JSON.stringify(generated)
      },
          (error, res, body) => {
            if (error) {
              console.error(error)
              return
            }
            console.log(`statusCode: ${res.statusCode}`)
            console.log(body)
            console.log("VPC CREATED")
            if(cb)
            cb(body,res.statusCode)

          }
        )
      })

      
    /*const temp = generated
    //console.log("haihaihai")
    //console.log(temp)
    const token = generateToken(username,password)
    console.log("demooooo")
    console.log(token)
    */

}

function getVpc(username,password,orgid,cb){


    generateToken(username,password,(body)=>{
        request.get({
            "headers" : {"content-type": "application/json","Authorization": `Bearer ${body.access_token}`},
            "url" : `https://anypoint.mulesoft.com/cloudhub/api/organizations/${orgid}/vpcs`

        },
        (error, res, body) => {
            if (error) {
              console.error(error)
              return
            }
            console.log(`statusCode: ${res.statusCode}`)
            console.log("LIST OF VPCs")
            console.log(body)
            if(cb)
            {
              
            cb(body,res.statusCode)
            //console.log(res)
            }
          }

        )
    })
}


function deleteVpc(username,password,orgid,vpcId){

    generateToken(username,password,(body)=>{
        request.delete({
            "headers" : {"content-type": "application/json","Authorization": `Bearer ${body.access_token}`},
            "url" : `https://anypoint.mulesoft.com/cloudhub/api/organizations/${orgid}/vpcs/${vpcId}`

        },
        (error, res, body) => {
            if (error) {
              console.error(error)
              //console.log(`statusCode: ${res.statusCode}`)
              return
            }
            console.log(`statusCode: ${res.statusCode}`)
            console.log(body)
          }

        )
    })
    
}

module.exports={postVpc,getVpc,deleteVpc}