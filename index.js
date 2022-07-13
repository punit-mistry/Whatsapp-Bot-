const qrcode = require("qrcode-terminal");
const axios = require("axios");
const { Buttons, List ,Client } = require('whatsapp-web.js');


// let value=false;
const client = new Client();

// Path where the session data will be stored



// Load the session data if it has been previously saved


// Use the saved values


// Save session values to the file upon successful auth




client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});


client.on("ready", () => {
  console.log("Client is ready!");
});




client.on("message", message => {
    if (message.body.toUpperCase() === "Hello"){
        message.reply("Welcome to Agarwal Packers and Movers Ltd. 👋 "+"/n"+"how can i help you ? " )
    }
  });
// client.on('message', message => {



// 	console.log(message.body);
// });
//  GC CODE START HERE 
client.on("message", async (message) => {
  const content = message.body.toUpperCase().split(" ")[0];
  const content1 = message.body.toUpperCase().split(" ")[1];
  Date.prototype.toShortFormat = function() {

    let monthNames =["Jan","Feb","Mar","Apr",
                      "May","Jun","Jul","Aug",
                      "Sep", "Oct","Nov","Dec"];
    
    let day = this.getDate();
    
    let monthIndex = this.getMonth();
    let monthName = monthNames[monthIndex];
    
    let year = this.getFullYear();
    
    return `${day}${monthName}${year}`;  
}
const newdate= new Date();
const newdate1= new Date(new Date().setDate(newdate.getDate() ));
  const olddate=new Date(new Date().setDate(newdate.getDate() - 30));
 
console.log(olddate.toShortFormat(),"sdfs",newdate1.toShortFormat())
    if (content =="GC" )  {
      if(content1!=undefined){
        var axios = require('axios');
        var config = {
          method: 'get',
          url: ['http://api.apml.in/Reports.svc/BookingSalesRegisterReport?StartDocketDate='+olddate.toShortFormat()+'&EndDocketDate='+newdate1.toShortFormat()+'&PageLimit=500&PageNumber=1'+
        'http://api.apml.in/Reports.svc/BookingSalesRegisterReport?StartDocketDate='+olddate.toShortFormat()+'&EndDocketDate='+newdate1.toShortFormat()+'&PageLimit=500&PageNumber=2'],
          headers: { 
            'Authorization': 'Basic UmVwb3J0czpSZVAwcnRT', 
            'Cookie': 'ASP.NET_SessionId=m5pa14qekipmfgjc3ksjrtnr'
          }
        };
      axios(config)
      .then(function (response) {
      let newValue =""
      console.log(response.data.Response.length,"heloooooooo")
      for(var i=0;i<response.data.Response.length;i++){
        if( content1 == response.data.Response[i].DocketNo){
          newValue = newValue+ "📟 GC Number "+  response.data.Response[i].DocketNo+"\n"+
          "🚚 Orgin :-"+response.data.Response[i].FromCity+"\n"+
          "📍 Destination :-" +response.data.Response[i].ToCity+"\n"+
          "🚚 Entry Date :-"+response.data.Response[i].DocketEntryDate+"\n"+
          "🚚 BookingType :-"+response.data.Response[i].BookingType+"\n"+
          "📦 Packages:- "+response.data.Response[i].Packages+"\n"+
          "🟢 GCStatus:- "+response.data.Response[i].GCStatus+"\n"+
          "📞 ConsignorMobileNo:- "+response.data.Response[i].ConsignorMobileNo+"\n"+
          "🔄 LastRefreshDate:- "+response.data.Response[i].LastRefreshDate.split("T")[0]+"\n"+
          "📟 Challan No."+response.data.Response[i].THCNO+"\n"+
          "🔢 Vehicle No."+response.data.Response[i].VehicleNo+"\n"+"\n"
        }  
      }
      message.reply(newValue)
      })
    }
    else{
      message.reply("Please Enter the GC Number ")
    }
    
  }  
});
// GC CODE ENDS HERE

// // CHALLAN CODE 
// client.on("message", async (message) => {
//   const content = message.body.toUpperCase().split(" ")[0];
//   const content1 = message.body.toUpperCase().split(" ")[1];
//   Date.prototype.toShortFormat = function() {

//     let monthNames =["Jan","Feb","Mar","Apr",
//                       "May","Jun","Jul","Aug",
//                       "Sep", "Oct","Nov","Dec"];
    
//     let day = this.getDate();
    
//     let monthIndex = this.getMonth();
//     let monthName = monthNames[monthIndex];
    
//     let year = this.getFullYear();
    
//     return `${day}${monthName}${year}`;  
// }
// const newdate= new Date();
// const newdate1= new Date(new Date().setDate(newdate.getDate() ));
//   const olddate=new Date(new Date().setDate(newdate.getDate() - 30));
 
// console.log(olddate.toShortFormat(),"sdfs",newdate1.toShortFormat())

// if (content.toUpperCase() ==="CHALLAN")  {
//   var axios = require('axios');
//   var config = {
//     method: 'get',
//     url: 'http://api.apml.in/Reports.svc/ChallanDetailReport?THCStartDate='+olddate.toShortFormat()+'&THCEndDate='+newdate1.toShortFormat()+'&PageLimit=500&PageNumber=2',
//     headers: { 
//       'Authorization': 'Basic UmVwb3J0czpSZVAwcnRT', 
//       'Cookie': 'ASP.NET_SessionId=m5pa14qekipmfgjc3ksjrtnr'
//     }
//   };
//   axios(config)
// .then(function (response) {
//   let newValue =""
//   console.log(response.data.Response.length,"heloooooooo")
//   for(var i=0;i<response.data.Response.length;i++){
//     if( content1 == response.data.Response[i].VehicleNo){
//       newValue = newValue+ "📟 Cha. Number "+  response.data.Response[i].THCNO+"\n"+
//       " Cha. Date :-"+response.data.Response[i].THCDate+"\n"+
//       "🚚 VehicleNo :-" +response.data.Response[i].VehicleNo+"\n"+
//       "🚚 Type :-"+response.data.Response[i].THCType+"\n"+
//       "🚚 From :-"+response.data.Response[i].FromCity+"\n"+
//       "📦 To :- "+response.data.Response[i].ToCity+"\n"+
//       "🟢 AdvanceAmount:- "+response.data.Response[i].AdvanceAmount+"\n"+
//       "📞 AdvanceDate:- "+response.data.Response[i].AdvanceDate+"\n"+
//       "🔄 Market / Own:- "+response.data.Response[i].MarketOwn+"\n"+
//       "📟 Distance :-"+response.data.Response[i].Distance+"\n"+
//       "🔢 TripSheet No."+response.data.Response[i].TripSheetNo+"\n"+"\n"
//     }  
//   }
//   message.reply(newValue)

// })
// }
// // else if(pattern ==  response.data.Response.VehicleNo){
// //   message.reply(newValue);
// // }
// });
//  // CHALLAN CODE  ENDS HERE 


// RegistrationNumber CODE HERE
 client.on("message", async (message) => {
  const content = message.body.toUpperCase();
  const pattern = /^[A-Z]{2}\d{1,2}[A-Z]{1,2}\d{4}$/;
  if (content.match(pattern))  {
    const truck = await axios
      .get(
        'https://apis.fretron.com/fleet-manager/fleetOps/v1/fleetOps?filters={"vehicleRegistrationNumber":[' +
          content +
          "]}&tab=ALL VEHICLES",
        {
          headers: {
            Authorization:
              "Bearer " +
              "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w //the token is a variable which holds the token",
          },
        }
      )
      .then((res) => res.data);
      let newValue=""
      for(var i=0;i<truck.data.records["NO GROUPING"].length;i++){
      if(truck.data.records["NO GROUPING"][0].origin==null || truck.data.records["NO GROUPING"][0].destination==null ||truck.data.records["NO GROUPING"][0].EDD==null  ){
        newValue = newValue +"🚚 Orgin :-" +"Not  Available !! " +" \n "+
        "📍 Destination :-" +"Not  Available !!  " +" \n "+
        "⏰ EDD :- " +truck.data.records["NO GROUPING"][0].EDD+ "\n " +
        "✔️ status :-" +truck.data.records["NO GROUPING"][0].status+" \n " +
        "👨‍✈️ Driver Name :- "+truck.data.records["NO GROUPING"][0].driver.name+" \n " +
        "📞 Driver Number  :-"+ truck.data.records["NO GROUPING"][0].driver.mobileNumber+"\n"+"\n";
       
      }else if(truck.data.records["NO GROUPING"][0].origin!=null || truck.data.records["NO GROUPING"][0].destination!=null||truck.data.records["NO GROUPING"][0].EDD!=null ){
       newValue =newValue+ "🚚 Orgin :-" +tru  
       ck.data.records["NO GROUPING"][0].origin.place.address +" \n "+
        "📍 Destination :-" +truck.data.records["NO GROUPING"][0].destination.place.address +" \n "+
        "⏰ EDD :- " +new Date(truck.data.records["NO GROUPING"][0].EDD).toISOString().split("T")[0]+" \n " +
        "✔️ status :-" +truck.data.records["NO GROUPING"][0].status+" \n " +
        "👨‍✈️ Driver Name :- "+truck.data.records["NO GROUPING"][0].driver.name+" \n " +
        "📞 Driver Number  :- "+truck.data.records["NO GROUPING"][0].driver.mobileNumber+"\n"+"\n";
        
       }
       message.reply(newValue);
      }
      
  }
    
  
});
// RegistrationNumber CODE HERE

// STATUS CODE 
client.on("message", async (message) => {
  const content = message.body.toUpperCase();
  console.log(content.toUpperCase())
  if (content.toUpperCase()==="OFF DUTY" || content.toUpperCase()==="MAINTENANCE" || content.toUpperCase()==="ENROUTE FOR PICKUP" || content.toUpperCase()==="AT UNLOADING" 
  || content.toUpperCase()==="AT LOADING" || content.toUpperCase()==="IN TRANSIT" || content.toLowerCase()=="Empty Run"|| content.toUpperCase()=="AVAILABLE"   )  {
    const truck = await axios
      .get(
        'https://apis.fretron.com/fleet-manager/fleetOps/v1/fleetOps?filters={}&tab='+content,
        {
          headers: {
            Authorization:
              "Bearer " +
              "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w //the token is a variable which holds the token",
          },
        }
      )
      .then((res) => res.data);
      let newValue="";
      for(var i=0;i<truck.data.records["NO GROUPING"].length;i++){
        if(truck.data.records["NO GROUPING"][i].driver==null ||truck.data.records["NO GROUPING"][i].emptyRunReason==null ||truck.data.records["NO GROUPING"][i].vehicle.customFields== null ){
          newValue=newValue+" 🚛 Vehicle Number:- "+truck.data.records["NO GROUPING"][i].vehicle.vehicleRegistrationNumber +" \n "+
            "custom filed:- "+"Not  Available !! "+" \n "
          " 🟨 Reason :- "+"Not  Available !! "+" \n "+
          "👨‍✈️ Driver Name:- "+"Not  Available !! "+" \n "+
          "📞 Driver Number:- "+ "Not  Available !! "+"\n"+"\n"
        } 
        // else if(truck.data.records["NO GROUPING"][i].vehicle.customFields!= null){

        //   newValue=newValue+" 🚛 Vehicle Number:- "+truck.data.records["NO GROUPING"][i].vehicle.vehicleRegistrationNumber+" \n "+
        //   "custom filed:- "+myobject.abc(truck.data.records["NO GROUPING"][i].vehicle.customFields)+" \n "
        //   // " 🟨 Reason :- "+truck.data.records["NO GROUPING"][i].emptyRunReason+" \n "+
        //   // "👨‍✈️ Driver Name:- "+truck.data.records["NO GROUPING"][i].driver.name+" \n "+
        //   // "📞 Driver Number:- "+ truck.data.records["NO GROUPING"][i].driver.mobileNumber+"\n"
        // }
        else if(myobject.abc(truck.data.records["NO GROUPING"][i].vehicle.customFields)== 'LINE_MXL'){

          newValue=newValue+" 🚛 Vehicle Number:- "+truck.data.records["NO GROUPING"][i].vehicle.vehicleRegistrationNumber+" \n "+
          "custom filed:- "+myobject.abc(truck.data.records["NO GROUPING"][i].vehicle.customFields)+" \n "
          " 🟨 Reason :- "+truck.data.records["NO GROUPING"][i].emptyRunReason+" \n "+
          "👨‍✈️ Driver Name:- "+truck.data.records["NO GROUPING"][i].driver.name+" \n "+
          "📞 Driver Number:- "+ truck.data.records["NO GROUPING"][i].driver.mobileNumber+"\n"+"\n"
        }
        
      }
      console.log(newValue)
     
    //   const newValue ="✔️ status :-" +truck.data.records["NO GROUPING"][0].status+" \n " +
    // "👨‍✈️ Driver Name :- "+truck.data.records["NO GROUPING"][0].driver.name+" \n " +
    // "📞 Driver Number  :- "+truck.data.records["NO GROUPING"][0].driver.mobileNumber;
    message.reply(newValue);
  }
    
  
});
// STATUS CODE ENDS HERE

//  WELCOME CODE 
client.on("message", async (message) => {
  const ddd = await message.getContact();
 
    if (message.body == 'BTN') {
      let button = new Buttons('Button body',[{body:'bt1'},{body:'bt2'},{body:'bt3'}],'title','footer');
      message.reply( button);
  
  }
  // if (message.body.toUpperCase() === "HELLO") {
  //   const newvalue="Welcome @"+ ddd.pushname +" to Agarwal Packers and Movers👋 \nhow can i help you ?\n🔴 For Vehicles details type 'TRUCK INFO'\n"+
  //  "🔴 For Vehicles status type 'status' \n🔴 For Checking the GC type 'GC    GCNUMBER' \n🔴 For Checking the Challan type 'Challan'   ";
  //   message.reply(newvalue);
  //   // console.log(ddd.pushname, "chu");
  // }
});
//  WELCOME CODE ENDS HERE 

//  TRUCK INFO FLOW 
client.on("message", async (message) => {
    //   const ddd = await message.getContact();
      if (message.body.toUpperCase() === "TRUCK INFO") {
        message.reply("Please enter the truck Registration Number 🚚" )
        // console.log(ddd.pushname, "chu");
      }
    });
//  TRUCK INFO FLOW ENDS HERE 

// STATUS FLOW 
    client.on("message", async (message) => {
      //   const ddd = await message.getContact();
        if (message.body.toUpperCase() === "STATUS") {
          message.reply("Please enter the Status that you want to check 🚚 \n 🟢'𝐎𝐅𝐅 𝐃𝐔𝐓𝐘' \n 🟢'MAINTENANCE' \n 🟢'ENROUTE FOR PICKUP' \n 🟢'AT UNLOADING' \n 🟢'AT LOADING'\n 🟢'IN TRANSIT'\n 🟢'Empty Run' \n 🟢'AVAILABLE' " )
          // console.log(ddd.pushname, "chu");
        }
      });
// STATUS FLOW ENDS 

client.on("message", async (msg) => {
  const mentions = await msg.getMentions();

  for (let contact of mentions) {
    console.log(`${contact.pushname} was mentioned`);
    console.log(`${contact.pushname} was nice one `);
  }
});
client.initialize();

//  FUNCTION FOR CUSTOM FILEDS CODE 
myobject={
  abc: function(_a){
    for (let i = 0; i < _a.length; i++) {
    if (_a[i]['fieldKey'] == 'VehicleDescription') {
      //console.log("hellllp",_a[i]['fieldKey'])
      this.y = _a[i]['value'];
      break;
    }
  }

  return this.y;
  }

}
//  FUNCTION FOR CUSTOM FILEDS CODE ENDS HERE 

 







// client.on("message", async (message) => {
//   const content = message.body.toUpperCase().split(" ")[0];
//    const content1 = message.body.toUpperCase().split(" ")[1];
//   Date.prototype.toShortFormat = function() {

//     let monthNames =["Jan","Feb","Mar","Apr",
//                       "May","Jun","Jul","Aug",
//                       "Sep", "Oct","Nov","Dec"];
    
//     let day = this.getDate();
    
//     let monthIndex = this.getMonth();
//     let monthName = monthNames[monthIndex];
    
//     let year = this.getFullYear();
    
//     return `${day}${monthName}${year}`;  
// }
// const newdate= new Date();
// const newdate1= new Date(new Date().setDate(newdate.getDate() ));
//   const olddate=new Date(new Date().setDate(newdate.getDate() - 30));
 
// console.log(olddate.toShortFormat(),"sdfs",newdate1.toShortFormat())
// let users=[];
// if (content.toUpperCase() ==="CHALLAN")  {
//   var axios = require('axios');
//   for (i = 0; i < 3; i++) {
 
//     var config = {
//       method: 'get',
//       url: 'http://api.apml.in/Reports.svc/ChallanDetailReport?THCStartDate='+olddate.toShortFormat()+'&THCEndDate='+newdate1.toShortFormat()+'&PageLimit=500&PageNumber='+i,
//       headers: { 
//         'Authorization': 'Basic UmVwb3J0czpSZVAwcnRT', 
//         'Cookie': 'ASP.NET_SessionId=m5pa14qekipmfgjc3ksjrtnr'
//       }
//     };
//     axios(config)
//     .then((response => {
//       // do something with response
//       users.push(response.data.Response);
//     })
   
//     )
//       let newValue =""
//       for(var i=0;i<users.length;i++){
//         if(users[i].THCNO == null ){
//           newValue = newValue+ "📟 Cha. Number "+  "null"+"\n"+
//           " Cha. Date :-"+users[i].THCDate+"\n"+
//           "🚚 VehicleNo :-" +users[i].VehicleNo+"\n"+
//           "🚚 Type :-"+users[i].THCType+"\n"+
//           "🚚 From :-"+users[i].FromCity+"\n"+
//           "📦 To :- "+users[i].ToCity+"\n"+
//           "🟢 AdvanceAmount:- "+users[i].AdvanceAmount+"\n"+
//           "📞 AdvanceDate:- "+users[i].AdvanceDate+"\n"+
//           "🔄 Market / Own:- "+users[i].MarketOwn+"\n"+
//           "📟 Distance :-"+users[i].Distance+"\n"+
//           "🔢 TripSheet No."+users[i].TripSheetNo+"\n"+"\n"
//         }
//         if( content1.toUpperCase() == "CHALLAN"){
//           newValue = newValue+ "📟 Cha. Number "+  users[i].THCNO+"\n"+
//           " Cha. Date :-"+users[i].THCDate+"\n"+
//           "🚚 VehicleNo :-" +users[i].VehicleNo+"\n"+
//           "🚚 Type :-"+users[i].THCType+"\n"+
//           "🚚 From :-"+users[i].FromCity+"\n"+
//           "📦 To :- "+users[i].ToCity+"\n"+
//           "🟢 AdvanceAmount:- "+users[i].AdvanceAmount+"\n"+
//           "📞 AdvanceDate:- "+users[i].AdvanceDate+"\n"+
//           "🔄 Market / Own:- "+users[i].MarketOwn+"\n"+
//           "📟 Distance :-"+users[i].Distance+"\n"+
//           "🔢 TripSheet No."+users[i].TripSheetNo+"\n"+"\n"
//         }  
//       }
//       message.reply(newValue)
     
    
//   }

 
  




// // .then(function (response) {
  

// // })
// }
// // else if(pattern ==  response.data.Response.VehicleNo){
// //   message.reply(newValue);
// // }
// });
 // CHALLAN CODE  ENDS HERE 