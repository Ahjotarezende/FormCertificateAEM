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
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    checkBasicModel.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class checkBasicModelImpl
    implements checkBasicModel
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textcheckbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String errorcheckbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorcheckbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colortextcheckbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorerrorcheckbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long fscheckbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Boolean checkbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Boolean roundbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Boolean requiredcheckbs;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("textcheckbs")
    public String getTextcheckbs() {
        return textcheckbs;
    }

    @Override
    @JsonProperty("errorcheckbs")
    public String getErrorcheckbs() {
        return errorcheckbs;
    }

    @Override
    @JsonProperty("colorcheckbs")
    public String getColorcheckbs() {
        return colorcheckbs;
    }

    @Override
    @JsonProperty("colortextcheckbs")
    public String getColortextcheckbs() {
        return colortextcheckbs;
    }

    @Override
    @JsonProperty("colorerrorcheckbs")
    public String getColorerrorcheckbs() {
        return colorerrorcheckbs;
    }

    @Override
    @JsonProperty("fscheckbs")
    public Long getFscheckbs() {
        return fscheckbs;
    }

    @Override
    @JsonProperty("checkbs")
    public Boolean getCheckbs() {
        return checkbs;
    }

    @Override
    @JsonProperty("roundbs")
    public Boolean getRoundbs() {
        return roundbs;
    }

    @Override
    @JsonProperty("requiredcheckbs")
    public Boolean getRequiredcheckbs() {
        return requiredcheckbs;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
