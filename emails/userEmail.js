const userEmail = (admin_id, data)=>{
    console.log(data)
    const {  user_id,
        user_email,
        user_fname,
        user_sname,
        masechta,
        start_mishna,
        end_mishna,
        reminder,
        siyum_name
    } = data;

    return  {
    to: user_email,
    subject: `Learning for ${siyum_name}`,
    html:`<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
  
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Learning for ${siyum_name}</title>
        
    <style type="text/css">
        p{
            margin:10px 0;
            padding:0;
        }
        table{
            border-collapse:collapse;
        }
        h1,h2,h3,h4,h5,h6{
            display:block;
            margin:0;
            padding:0;
        }
        img,a img{
            border:0;
            height:auto;
            outline:none;
            text-decoration:none;
        }
        body,#bodyTable,#bodyCell{
            height:100%;
            margin:0;
            padding:0;
            width:100%;
        }
        .mcnPreviewText{
            display:none !important;
        }
        #outlook a{
            padding:0;
        }
        img{
            -ms-interpolation-mode:bicubic;
        }
        table{
            mso-table-lspace:0pt;
            mso-table-rspace:0pt;
        }
        .ReadMsgBody{
            width:100%;
        }
        .ExternalClass{
            width:100%;
        }
        p,a,li,td,blockquote{
            mso-line-height-rule:exactly;
        }
        a[href^=tel],a[href^=sms]{
            color:inherit;
            cursor:default;
            text-decoration:none;
        }
        p,a,li,td,body,table,blockquote{
            -ms-text-size-adjust:100%;
            -webkit-text-size-adjust:100%;
        }
        .ExternalClass,.ExternalClass p,.ExternalClass td,.ExternalClass div,.ExternalClass span,.ExternalClass font{
            line-height:100%;
        }
        a[x-apple-data-detectors]{
            color:inherit !important;
            text-decoration:none !important;
            font-size:inherit !important;
            font-family:inherit !important;
            font-weight:inherit !important;
            line-height:inherit !important;
        }
        .templateContainer{
            max-width:600px !important;
        }
        a.mcnButton{
            display:block;
        }
        .mcnImage,.mcnRetinaImage{
            vertical-align:bottom;
        }
        .mcnTextContent{
            word-break:break-word;
        }
        .mcnTextContent img{
            height:auto !important;
        }
        .mcnDividerBlock{
            table-layout:fixed !important;
        }

        body,#bodyTable{
            background-color:#FAFAFA;
        }

        #bodyCell{
            border-top:0;
        }

        h1{
            color:#202020;
            font-family:Helvetica;
            font-size:26px;
            font-style:normal;
            font-weight:bold;
            line-height:125%;
            letter-spacing:normal;
            text-align:left;
        }

        h2{
            color:#202020;
            font-family:Helvetica;
            font-size:22px;
            font-style:normal;
            font-weight:bold;
            line-height:125%;
            letter-spacing:normal;
            text-align:left;
        }

        h3{
            color:#202020;
            font-family:Helvetica;
            font-size:20px;
            font-style:normal;
            font-weight:bold;
            line-height:125%;
            letter-spacing:normal;
            text-align:left;
        }

        h4{
            color:#202020;
            font-family:Helvetica;
            font-size:18px;
            font-style:normal;
            font-weight:bold;
            line-height:125%;
            letter-spacing:normal;
            text-align:left;
        }

        #templatePreheader{
            background-color:#FAFAFA;
            background-image:none;
            background-repeat:no-repeat;
            background-position:center;
            background-size:cover;
            border-top:0;
            border-bottom:0;
            padding-top:9px;
            padding-bottom:9px;
        }

        #templatePreheader .mcnTextContent,#templatePreheader .mcnTextContent p{
            color:#656565;
            font-family:Helvetica;
            font-size:12px;
            line-height:150%;
            text-align:left;
        }
    
        #templatePreheader .mcnTextContent a,#templatePreheader .mcnTextContent p a{
            color:#656565;
            font-weight:normal;
            text-decoration:underline;
        }
    
        #templateHeader{
            background-color:#FFFFFF;
            background-image:none;
            background-repeat:no-repeat;
            background-position:center;
            background-size:cover;
            border-top:0;
            border-bottom:0;
            padding-top:9px;
            padding-bottom:0;
        }

        #templateHeader .mcnTextContent,#templateHeader .mcnTextContent p{
            color:#202020;
            font-family:Helvetica;
            font-size:16px;
            line-height:150%;
            text-align:left;
        }

        #templateHeader .mcnTextContent a,#templateHeader .mcnTextContent p a{
            color:#007C89;
            font-weight:normal;
            text-decoration:underline;
        }

        #templateBody{
            background-color:#FFFFFF;
            background-image:none;
            background-repeat:no-repeat;
            background-position:center;
            background-size:cover;
            border-top:0;
            border-bottom:0;
            padding-top:9px;
            padding-bottom:9px;
        }

        #templateBody .mcnTextContent,#templateBody .mcnTextContent p{
            color:#202020;
            font-family:Helvetica;
            font-size:16px;
            line-height:150%;
            text-align:left;
        }

        #templateBody .mcnTextContent a,#templateBody .mcnTextContent p a{
            color:#007C89;
            font-weight:normal;
            text-decoration:underline;
        }

        #templateFooter{
            background-color:#FAFAFA;
            background-image:none;
            background-repeat:no-repeat;
            background-position:center;
            background-size:cover;
            border-top:0;
            border-bottom:0;
            padding-top:9px;
            padding-bottom:9px;
        }
    
        #templateFooter .mcnTextContent,#templateFooter .mcnTextContent p{
            color:#656565;
            font-family:Helvetica;
            font-size:12px;
            line-height:150%;
            text-align:center;
        }
    
        #templateFooter .mcnTextContent a,#templateFooter .mcnTextContent p a{
            color:#656565;
            font-weight:normal;
            text-decoration:underline;
        }
    @media only screen and (min-width:768px){
        .templateContainer{
            width:600px !important;
        }

}	@media only screen and (max-width: 480px){
        body,table,td,p,a,li,blockquote{
            -webkit-text-size-adjust:none !important;
        }

}	@media only screen and (max-width: 480px){
        body{
            width:100% !important;
            min-width:100% !important;
        }

}	@media only screen and (max-width: 480px){
        .mcnRetinaImage{
            max-width:100% !important;
        }

}	@media only screen and (max-width: 480px){
        .mcnImage{
            width:100% !important;
        }

}	@media only screen and (max-width: 480px){
        .mcnCartContainer,.mcnCaptionTopContent,.mcnRecContentContainer,.mcnCaptionBottomContent,.mcnTextContentContainer,.mcnBoxedTextContentContainer,.mcnImageGroupContentContainer,.mcnCaptionLeftTextContentContainer,.mcnCaptionRightTextContentContainer,.mcnCaptionLeftImageContentContainer,.mcnCaptionRightImageContentContainer,.mcnImageCardLeftTextContentContainer,.mcnImageCardRightTextContentContainer,.mcnImageCardLeftImageContentContainer,.mcnImageCardRightImageContentContainer{
            max-width:100% !important;
            width:100% !important;
        }

}	@media only screen and (max-width: 480px){
        .mcnBoxedTextContentContainer{
            min-width:100% !important;
        }

}	@media only screen and (max-width: 480px){
        .mcnImageGroupContent{
            padding:9px !important;
        }

}	@media only screen and (max-width: 480px){
        .mcnCaptionLeftContentOuter .mcnTextContent,.mcnCaptionRightContentOuter .mcnTextContent{
            padding-top:9px !important;
        }

}	@media only screen and (max-width: 480px){
        .mcnImageCardTopImageContent,.mcnCaptionBottomContent:last-child .mcnCaptionBottomImageContent,.mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent{
            padding-top:18px !important;
        }

}	@media only screen and (max-width: 480px){
        .mcnImageCardBottomImageContent{
            padding-bottom:9px !important;
        }

}	@media only screen and (max-width: 480px){
        .mcnImageGroupBlockInner{
            padding-top:0 !important;
            padding-bottom:0 !important;
        }

}	@media only screen and (max-width: 480px){
        .mcnImageGroupBlockOuter{
            padding-top:9px !important;
            padding-bottom:9px !important;
        }

}	@media only screen and (max-width: 480px){
        .mcnTextContent,.mcnBoxedTextContentColumn{
            padding-right:18px !important;
            padding-left:18px !important;
        }

}	@media only screen and (max-width: 480px){
        .mcnImageCardLeftImageContent,.mcnImageCardRightImageContent{
            padding-right:18px !important;
            padding-bottom:0 !important;
            padding-left:18px !important;
        }

}	@media only screen and (max-width: 480px){
        .mcpreview-image-uploader{
            display:none !important;
            width:100% !important;
        }

}	@media only screen and (max-width: 480px){
    
        h1{
            font-size:22px !important;
            line-height:125% !important;
        }

}	@media only screen and (max-width: 480px){
    
        h2{
            font-size:20px !important;
            line-height:125% !important;
        }

}	@media only screen and (max-width: 480px){
    
        h3{
            font-size:18px !important;
            line-height:125% !important;
        }

}	@media only screen and (max-width: 480px){
    
        h4{
            font-size:16px !important;
            line-height:150% !important;
        }

}	@media only screen and (max-width: 480px){
    
        .mcnBoxedTextContentContainer .mcnTextContent,.mcnBoxedTextContentContainer .mcnTextContent p{
            font-size:14px !important;
            line-height:150% !important;
        }

}	@media only screen and (max-width: 480px){
    
        #templatePreheader{
            display:block !important;
        }

}	@media only screen and (max-width: 480px){

        #templatePreheader .mcnTextContent,#templatePreheader .mcnTextContent p{
            font-size:14px !important;
            line-height:150% !important;
        }

}	@media only screen and (max-width: 480px){

        #templateHeader .mcnTextContent,#templateHeader .mcnTextContent p{
            font-size:16px !important;
            line-height:150% !important;
        }

}	@media only screen and (max-width: 480px){
    
        #templateBody .mcnTextContent,#templateBody .mcnTextContent p{
            font-size:16px !important;
            line-height:150% !important;
        }

}	@media only screen and (max-width: 480px){

        #templateFooter .mcnTextContent,#templateFooter .mcnTextContent p{
            font-size:14px !important;
            line-height:150% !important;
        }

}</style></head>
    <body>
        
        <span class="mcnPreviewText" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">Learning for ${siyum_name}</span>
       
        <center>
            <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable">
                <tr>
                    <td align="center" valign="top" id="bodyCell">
                        <!-- BEGIN TEMPLATE // -->
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td align="center" valign="top" id="templatePreheader">
                                    
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                                        <tr>
                                            <td valign="top" class="preheaderContainer"></td>
                                        </tr>
                                    </table>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td align="center" valign="top" id="templateHeader">
                                    
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                                        <tr>
                                            <td valign="top" class="headerContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="min-width:100%;">
    <tbody class="mcnImageBlockOuter">
            <tr>
                <td valign="top" style="padding:9px" class="mcnImageBlockInner">
                    <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="min-width:100%;">
                        <tbody><tr>
                            <td class="mcnImageContent" valign="top" style="padding-right: 9px; padding-left: 9px; padding-top: 0; padding-bottom: 0; text-align:center;">
                                
                                    
                                        <img align="center" alt="" src="https://gallery.mailchimp.com/ba390245ba1e66face91e7941/images/97cca874-b2f5-40de-8ec6-9837d243e3e7.png" width="564" style="max-width:1022px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage">
                                    
                                
                            </td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
    </tbody>
</table></td>
                                        </tr>
                                    </table>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td align="center" valign="top" id="templateBody">
                                    
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                                        <tr>
                                            <td valign="top" class="bodyContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnCaptionBlock">
    <tbody class="mcnCaptionBlockOuter">
        <tr>
            <td class="mcnCaptionBlockInner" valign="top" style="padding:9px;">
                

<table border="0" cellpadding="0" cellspacing="0" class="mcnCaptionLeftContentOuter" width="100%">
    <tbody><tr>
        <td valign="top" class="mcnCaptionLeftContentInner" style="padding:0 9px ;">
            <table align="right" border="0" cellpadding="0" cellspacing="0" class="mcnCaptionLeftImageContentContainer" width="176">
                <tbody><tr>
                    <td class="mcnCaptionLeftImageContent" align="center" valign="top">
                    
                        
                        <a href="http://time4torah.org/haskomos/" title="" class="" target="_blank">
                        
                        <img alt="" src="https://gallery.mailchimp.com/ba390245ba1e66face91e7941/images/dff9069d-b88e-4639-b9f5-9d1bf13a0be2.jpg" width="176" style="max-width:1240px;" class="mcnImage">
                        </a>
                    
                    </td>
                </tr>
            </tbody></table>
            <table class="mcnCaptionLeftTextContentContainer" align="left" border="0" cellpadding="0" cellspacing="0" width="352">
                <tbody><tr>
                    <td valign="top" class="mcnTextContent">
                        <table border="0" cellpadding="0" cellspacing="0" id="m_1726973761007883661m_-5099309019554073853m_243179981558985769m_-4466272940107546510m_4733914871536301359m_-56000656910093311m_7969682066111792435m_-2000489183066331472m_-6447812123769630138m_-968063963485954499m_4337960113896958335m_5762067212335667416m_5641169455042266492m_-7413569258733671547m_3743225599117003559m_4468386966925104472m_-4281019902982383022m_1091911236894855584m_5296926876505076799m_3608684175444606163m_4245112186231820402m_-9041426181675869564m_-4355530613541822289m_3812444084638745617m_-500464960179229246m_-1803617123377684576m_-3515054581475238703m_-862727020526170776m_-6613291544222084375topMiddle" width="100%">
    <tbody>
        <tr>
            <td valign="top" width="100%"><br>
            <span style="font-size:16px"><span style="font-family:georgia,times,times new roman,serif">&nbsp;<br>
            Hi ${user_fname},
            
            Thank you for making a Learning Maseches ${masechta} for ${siyum_name}.<br>
            <br>
            Here is the link for people to sign up for mishnayos.<br>
            <a href="https://time4torah.org/masechta/${masechta}">Maseches ${masechta} </a>
                 <a href="http://localhost:9090/api/siyumim/${admin_id}">Shloshim Sign Up Link</a>
            <br>
            &nbsp;<br>
            
    
            
        </tr>
        <tr>
            <td valign="top"><span style="font-family:georgia,times,times new roman,serif">---</span>
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                    <tr>
                        <td align="left">
                        <table border="0" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td align="left">
                                    <table border="0" cellpadding="0" cellspacing="0">
                                        <tbody>
                                            <tr>
                                                <td><span style="font-family:georgia,times,times new roman,serif"><span style="font-size:14px"><strong>Time4Mishna<br>
                                                Time4Torah</strong></span></span><br>
                                                <span style="font-family:georgia,times,times new roman,serif"><a href="http://www.time4torah.org" target="_blank">www.time4torah.org</a></span><br>
                                                <br>
                                                <span style="font-family:georgia,times,times new roman,serif"><a href="https://donate.jfutures.org/?message=I%20am%20supporting%20Time4Torah" target="_blank"><span style="color:#008080"><strong><font size="4"><em>Help us&nbsp;disseminate Torah across the world!</em></font></strong></span></a><strong><a href="https://donate.jfutures.org/?message=I%20am%20supporting%20Time4Torah"><span style="color:#008080"><font size="4"><em> </em></font></span></a></strong><br>
                                                <strong><span style="color:#008080"><font size="4"><em><a href="https://donate.jfutures.org/?message=I%20am%20supporting%20Time4Torah">Click here to donate to Time4Mishna</a><br>
                                                <a href="https://www.paypal.com/paypalme/JewishFuturesTrust" target="_blank">Click here to donate with Paypal</a></em></font></span><br>
                                                <span style="color:#008080"><font size="4"><em>Please make sure to write Time4Torah in the message</em></font></span></strong></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            </td>
        </tr>
    </tbody>
</table>

                    </td>
                </tr>
            </tbody></table>
        </td>
    </tr>
</tbody></table>





            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageGroupBlock">
    <tbody class="mcnImageGroupBlockOuter">
        
            <tr>
                <td valign="top" style="padding:9px" class="mcnImageGroupBlockInner">
                    
                    <table align="left" width="273" border="0" cellpadding="0" cellspacing="0" class="mcnImageGroupContentContainer">
                            <tbody><tr>
                                <td class="mcnImageGroupContent" valign="top" style="padding-left: 9px; padding-top: 0; padding-bottom: 0;">
                                
                                    <a href="https://itunes.apple.com/us/app/time4mishna-daily-mishnayos/id1439380311" title="" class="" target="_blank">
                                        <img alt="" src="https://gallery.mailchimp.com/ba390245ba1e66face91e7941/images/e0e5401a-8792-4422-abd3-e82820db96e2.png" width="264" style="max-width:1000px; padding-bottom: 0;" class="mcnImage">
                                    </a>
                                
                                </td>
                            </tr>
                        </tbody></table>
                    
                    <table align="right" width="273" border="0" cellpadding="0" cellspacing="0" class="mcnImageGroupContentContainer">
                            <tbody><tr>
                                <td class="mcnImageGroupContent" valign="top" style="padding-right: 9px; padding-top: 0; padding-bottom: 0;">
                                
                                    <a href="https://play.google.com/store/apps/details?id=com.maatayim.time4mishna" title="" class="" target="_blank">
                                        <img alt="" src="https://gallery.mailchimp.com/ba390245ba1e66face91e7941/images/a6006b49-cd5c-4245-9c97-6cc821d6f4b5.png" width="264" style="max-width:1000px; padding-bottom: 0;" class="mcnImage">
                                    </a>
                                
                                </td>
                            </tr>
                        </tbody></table>
                    
                </td>
            </tr>
        
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="min-width:100%;">
    <tbody class="mcnImageBlockOuter">
            <tr>
                <td valign="top" style="padding:9px" class="mcnImageBlockInner">
                    <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="min-width:100%;">
                        <tbody><tr>
                            <td class="mcnImageContent" valign="top" style="padding-right: 9px; padding-left: 9px; padding-top: 0; padding-bottom: 0; text-align:center;">
                                
                                    <a href="http://time4torah.org" title="" class="" target="_blank">
                                        <img align="center" alt="" src="https://gallery.mailchimp.com/ba390245ba1e66face91e7941/images/5fcabcd4-91bb-48be-b000-f240ab850468.png" width="564" style="max-width:1003px; padding-bottom: 0; display: inline !important; vertical-align: bottom;" class="mcnImage">
                                    </a>
                                
                            </td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
    </tbody>
</table>
    <tbody class="mcnFollowBlockOuter">
        <tr>
            <td align="center" valign="top" style="padding:9px" class="mcnFollowBlockInner">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentContainer" style="min-width:100%;">
    <tbody><tr>
        <td align="center" style="padding-left:9px;padding-right:9px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width:100%;" class="mcnFollowContent">
                <tbody><tr>
                    <td align="center" valign="top" style="padding-top:9px; padding-right:9px; padding-left:9px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0">
                            <tbody><tr>
                                <td align="center" valign="top">
                                                                          
                                            <table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;">
                                                <tbody><tr>
                                                    <td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                            <tbody><tr>
                                                                <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                        <tbody><tr>
                                                                            
                                                                                <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                    <a href="https://www.facebook.com/time4torah/" target="_blank"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-facebook-48.png" style="display:block;" height="24" width="24" class=""></a>
                                                                                </td>
                                                                            
                                                                            
                                                                        </tr>
                                                                    </tbody></table>
                                                                </td>
                                                            </tr>
                                                        </tbody></table>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                        
                                        
                                            <table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;">
                                                <tbody><tr>
                                                    <td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                            <tbody><tr>
                                                                <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                        <tbody><tr>
                                                                            
                                                                                <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                    <a href="mailto:time4mishna@gmail.com" target="_blank"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-forwardtofriend-48.png" style="display:block;" height="24" width="24" class=""></a>
                                                                                </td>
                                                                            
                                                                            
                                                                        </tr>
                                                                    </tbody></table>
                                                                </td>
                                                            </tr>
                                                        </tbody></table>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                  
                                        
                                            <table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;">
                                                <tbody><tr>
                                                    <td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                            <tbody><tr>
                                                                <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                        <tbody><tr>
                                                                            
                                                                                <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                    <a href="https://www.time4torah.org" target="_blank"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-link-48.png" style="display:block;" height="24" width="24" class=""></a>
                                                                                </td>
                                                                            
                                                                            
                                                                        </tr>
                                                                    </tbody></table>
                                                                </td>
                                                            </tr>
                                                        </tbody></table>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                     
                                            <table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;">
                                                <tbody><tr>
                                                    <td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                            <tbody><tr>
                                                                <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                        <tbody><tr>
                                                                            
                                                                                <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                    <a href="https://soundcloud.com/user-552219537" target="_blank"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-soundcloud-48.png" style="display:block;" height="24" width="24" class=""></a>
                                                                                </td>
                                                                            
                                                                            
                                                                        </tr>
                                                                    </tbody></table>
                                                                </td>
                                                            </tr>
                                                        </tbody></table>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                        
                                        
                                            <table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;">
                                                <tbody><tr>
                                                    <td valign="top" style="padding-right:10px; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                            <tbody><tr>
                                                                <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                        <tbody><tr>
                                                                            
                                                                                <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                    <a href="https://www.youtube.com/channel/UCnscQTyMAx4ELU73T8_93Bw" target="_blank"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-youtube-48.png" style="display:block;" height="24" width="24" class=""></a>
                                                                                </td>
                                                                            
                                                                            
                                                                        </tr>
                                                                    </tbody></table>
                                                                </td>
                                                            </tr>
                                                        </tbody></table>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                        
                                            <table align="left" border="0" cellpadding="0" cellspacing="0" style="display:inline;">
                                                <tbody><tr>
                                                    <td valign="top" style="padding-right:0; padding-bottom:9px;" class="mcnFollowContentItemContainer">
                                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentItem">
                                                            <tbody><tr>
                                                                <td align="left" valign="middle" style="padding-top:5px; padding-right:10px; padding-bottom:5px; padding-left:9px;">
                                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="">
                                                                        <tbody><tr>
                                                                            
                                                                                <td align="center" valign="middle" width="24" class="mcnFollowIconContent">
                                                                                    <a href="https://spoti.fi/2X1YhNf" target="_blank"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/color-spotify-48.png" style="display:block;" height="24" width="24" class=""></a>
                                                                                </td>
                                                                            
                                                                            
                                                                        </tr>
                                                                    </tbody></table>
                                                                </td>
                                                            </tr>
                                                        </tbody></table>
                                                    </td>
                                                </tr>
                                            </tbody></table>
                                        
                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
            </tbody></table>
        </td>
    </tr>
</tbody></table>

            </td>
        </tr>
    </tbody>
</table></td>
                                        </tr>
                                    </table>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td align="center" valign="top" id="templateFooter">
                           
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer">
                                        <tr>
                                            <td valign="top" class="footerContainer"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="min-width:100%;">
    <tbody class="mcnDividerBlockOuter">
        <tr>
            <td class="mcnDividerBlockInner" style="min-width: 100%; padding: 10px 18px 25px;">
                <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%;border-top: 2px solid #EEEEEE;">
                    <tbody><tr>
                        <td>
                            <span></span>
                        </td>
                    </tr>
                </tbody></table>

            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="min-width:100%;">
    <tbody class="mcnDividerBlockOuter">
        <tr>
            <td class="mcnDividerBlockInner" style="min-width: 100%; padding: 10px 18px 25px;">
                <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%;border-top: 2px solid #EEEEEE;">
                    <tbody><tr>
                        <td>
                            <span></span>
                        </td>
                    </tr>
                </tbody></table>

            </td>
        </tr>
    </tbody>
</table></td>
                                        </tr>
                                    </table>
                                    
                                </td>
                            </tr>
                        </table>
                        <!-- // END TEMPLATE -->
                    </td>
                </tr>
            </table>
        </center>
    </body>
</html>
`}

}


module.exports = userEmail;