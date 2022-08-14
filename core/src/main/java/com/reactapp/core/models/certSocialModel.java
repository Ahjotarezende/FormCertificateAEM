/*
 * ***********************************************************************
 * React App CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 React App.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of React App and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to React App
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from React App.
 * ***********************************************************************
 */

package com.reactapp.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code certSocialModel} Sling Model used for the multifield in {@code reactapp/components/geralpage} component.
 * 
 */
@ConsumerType
public interface certSocialModel
    extends ComponentExporter
{


    @JsonProperty("colorbtsc")
    String getColorbtsc();

    @JsonProperty("leftimagecertsc")
    com.adobe.cq.wcm.core.components.models.Image getLeftimagecertsc();

    @JsonProperty("rightimagecertsc")
    com.adobe.cq.wcm.core.components.models.Image getRightimagecertsc();

    @JsonProperty("txtcertsc")
    String getTxtcertsc();

    @JsonProperty("colortxtcertsc")
    String getColortxtcertsc();

    @JsonProperty("fstxtcertsc")
    Long getFstxtcertsc();

    @JsonProperty("brbtcertsc")
    Long getBrbtcertsc();

    @JsonProperty("bgopcertsc")
    String getBgopcertsc();

    @JsonProperty("colorbtmoresc")
    String getColorbtmoresc();

    @JsonProperty("leftimagemoresc")
    com.adobe.cq.wcm.core.components.models.Image getLeftimagemoresc();

    @JsonProperty("rightimagemoresc")
    com.adobe.cq.wcm.core.components.models.Image getRightimagemoresc();

    @JsonProperty("txtmoresc")
    String getTxtmoresc();

    @JsonProperty("colortxtmoresc")
    String getColortxtmoresc();

    @JsonProperty("fstxtmoresc")
    Long getFstxtmoresc();

    @JsonProperty("brbtmoresc")
    Long getBrbtmoresc();

    @JsonProperty("colorerrorcertsc")
    String getColorerrorcertsc();

    @JsonProperty("phcertsc")
    String getPhcertsc();

    @JsonProperty("errortextsc")
    String getErrortextsc();

}
