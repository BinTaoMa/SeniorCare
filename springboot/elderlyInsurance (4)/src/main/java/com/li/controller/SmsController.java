package com.li.controller;

import com.github.qcloudsms.SmsSingleSender;
import com.github.qcloudsms.SmsSingleSenderResult;
import com.github.qcloudsms.httpclient.HTTPException;
import com.li.pojo.Sms;

import org.json.JSONException;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/sms")
public class SmsController {

    @RequestMapping(value="/sendMessage",method = RequestMethod.POST )
    public void sendMessage(@RequestBody Sms sms){

        int appid= 1400743573;
        String appkey="9ef10ab7a6b105e6fc18adfee405ab50";
        int templateId= 1556331;
        String SmsSign="老人天天保";

        try {
            String[] params = {sms.getName()};
            SmsSingleSender ssender = new SmsSingleSender(appid,appkey);
            SmsSingleSenderResult result = ssender.sendWithParam("86", sms.getPhoneNumber(),templateId,
                    params,SmsSign,"","");
            System.out.println(result);
        }catch(HTTPException e){
            e.printStackTrace();
        }catch(JSONException e){
            e.printStackTrace();
        }catch(IOException e){
            e.printStackTrace();
        }

    }

}
