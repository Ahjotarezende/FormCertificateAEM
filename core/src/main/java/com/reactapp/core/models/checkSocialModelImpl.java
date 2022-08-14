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
    checkSocialModel.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class checkSocialModelImpl
    implements checkSocialModel
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textchecksc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String errorchecksc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorchecksc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colortextchecksc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorerrorchecksc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long fschecksc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Boolean checksc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Boolean roundsc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Boolean requiredchecksc;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("textchecksc")
    public String getTextchecksc() {
        return textchecksc;
    }

    @Override
    @JsonProperty("errorchecksc")
    public String getErrorchecksc() {
        return errorchecksc;
    }

    @Override
    @JsonProperty("colorchecksc")
    public String getColorchecksc() {
        return colorchecksc;
    }

    @Override
    @JsonProperty("colortextchecksc")
    public String getColortextchecksc() {
        return colortextchecksc;
    }

    @Override
    @JsonProperty("colorerrorchecksc")
    public String getColorerrorchecksc() {
        return colorerrorchecksc;
    }

    @Override
    @JsonProperty("fschecksc")
    public Long getFschecksc() {
        return fschecksc;
    }

    @Override
    @JsonProperty("checksc")
    public Boolean getChecksc() {
        return checksc;
    }

    @Override
    @JsonProperty("roundsc")
    public Boolean getRoundsc() {
        return roundsc;
    }

    @Override
    @JsonProperty("requiredchecksc")
    public Boolean getRequiredchecksc() {
        return requiredchecksc;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
