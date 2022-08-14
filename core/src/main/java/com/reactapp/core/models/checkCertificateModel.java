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
 * Defines the {@code checkCertificateModel} Sling Model used for the multifield in {@code reactapp/components/geralpage} component.
 * 
 */
@ConsumerType
public interface checkCertificateModel
    extends ComponentExporter
{


    @JsonProperty("textcheckct")
    String getTextcheckct();

    @JsonProperty("errorcheckct")
    String getErrorcheckct();

    @JsonProperty("colorcheckct")
    String getColorcheckct();

    @JsonProperty("colortextcheckct")
    String getColortextcheckct();

    @JsonProperty("colorerrorcheckct")
    String getColorerrorcheckct();

    @JsonProperty("fscheckct")
    Long getFscheckct();

    @JsonProperty("checkct")
    Boolean getCheckct();

    @JsonProperty("roundct")
    Boolean getRoundct();

    @JsonProperty("requiredcheckct")
    Boolean getRequiredcheckct();

}
