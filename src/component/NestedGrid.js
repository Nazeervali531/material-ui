import React from 'react'
import {Grid} from '@material-ui/core';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import EmailIcon from '@material-ui/icons/Email';

function NestedGrid() {
 
  return (
    <div>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <h1 className="heading">Cogent Employee List</h1>

        </Grid>
        <Grid item xs={4}>
          <h2 className=" mainbat">Team Grocery list<PermIdentityIcon color="secondary" fontSize="small"/></h2>
          <div>Rajesh</div>
          <div>Akhil</div>
          <div>Salma</div>
          <div>Rehan</div>
          <div>Shasi</div>
          <div>Debkar</div>
          <div>Asifha</div>
          <div>Komal</div>
          <div>Gulfha</div>
          <div>Bathool</div>
        </Grid>
        <Grid item xs={4}>
          <h2 className="mainbow">Employee Email Id  <EmailIcon color="secondary" fontSize="small"/></h2>
          
          <div>cog.cfk09190506@partner.flipkart.com</div>
          <div>cog.cfk09190511@partner.flipkart.com</div>
          <div>cog.cfk09190513@partner.flipkart.com</div>
          
          <div>cog.cfk09190505@partner.flipkart.com</div>
          <div>cog.cfk09190753@partner.flipkart.com</div>
          
          <div>cog.cfk09190764@partner.flipkart.com</div>
          <div>cog.cfk09190720@partner.flipkart.com</div>
          <div>cog.cfk09190717@partner.flipkart.com</div>
          <div>cog.cfk09190762@partner.flipkart.com</div>
          <div>cog.cfk09190761@partner.flipkart.com</div>
         

          
        </Grid>
        <Grid item xs={4}>
        <h2 className="bowler mainall">MobileNumber<PhoneAndroidIcon color="secondary" fontSize="small"/></h2>
        <div>9110350529</div>
        <div>9110350528</div>
        <div>9110350527</div>
        <div>9110350526</div>
        
        <div>9110350525</div>
        <div>9110350524</div>
        <div>9110350523</div>
        <div>9110350522</div>
        <div>9110350521</div>
        <div>9110350520</div>
        </Grid>
        
      </Grid>
    </div>
  );
}
export default NestedGrid
