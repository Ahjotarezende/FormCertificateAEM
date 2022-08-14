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
 * Defines the {@code buttonResultModel} Sling Model used for the multifield in {@code reactapp/components/geralpage} component.
 * 
 */
@ConsumerType
public interface buttonResultModel
    extends ComponentExporter
{


    @JsonProperty("txtbuttonrs")
    String getTxtbuttonrs();

    @JsonProperty("colorbuttonrs")
    String getColorbuttonrs();

    @JsonProperty("colortxtbuttonrs")
    String getColortxtbuttonrs();

    @JsonProperty("fsbuttonrs")
    Long getFsbuttonrs();

    @JsonProperty("brbuttonrs")
    Long getBrbuttonrs();

    @JsonProperty("leftimagers")
    com.adobe.cq.wcm.core.components.models.Image getLeftimagers();

    @JsonProperty("rightimagers")
    com.adobe.cq.wcm.core.components.models.Image getRightimagers();

}
