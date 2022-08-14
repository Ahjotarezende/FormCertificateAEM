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
    inputSocialModel.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class inputSocialModelImpl
    implements inputSocialModel
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textlabelsc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textplacesc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String texterrorsc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorlabelsc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorerrorsc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long fsinputsc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Boolean requiredinputsc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String typeinputsc;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("textonesc")
    public String getTextlabelsc() {
        return textlabelsc;
    }

    @Override
    @JsonProperty("texttwosc")
    public String getTextplacesc() {
        return textplacesc;
    }

    @Override
    @JsonProperty("textthreesc")
    public String getTexterrorsc() {
        return texterrorsc;
    }

    @Override
    @JsonProperty("colortextnavsc")
    public String getColorlabelsc() {
        return colorlabelsc;
    }

    @Override
    @JsonProperty("colorselectedsc")
    public String getColorerrorsc() {
        return colorerrorsc;
    }

    @Override
    @JsonProperty("colorcompsc")
    public Long getFsinputsc() {
        return fsinputsc;
    }

    @Override
    @JsonProperty("requiredinputsc")
    public Boolean getRequiredinputsc() {
        return requiredinputsc;
    }

    @Override
    @JsonProperty("typeinputsc")
    public String getTypeinputsc() {
        return typeinputsc;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
