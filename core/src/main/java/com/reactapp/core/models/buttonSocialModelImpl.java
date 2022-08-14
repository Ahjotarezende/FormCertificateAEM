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

import com.adobe.acs.commons.models.injectors.annotation.ChildResourceFromRequest;
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
    buttonSocialModel.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class buttonSocialModelImpl
    implements buttonSocialModel
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String txtbuttonsc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorbuttonsc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colortxtbuttonsc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long fsbuttonsc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long brbuttonsc;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image leftimagesc;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image rightimagesc;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("txtbuttonsc")
    public String getTxtbuttonsc() {
        return txtbuttonsc;
    }

    @Override
    @JsonProperty("colorbuttonsc")
    public String getColorbuttonsc() {
        return colorbuttonsc;
    }

    @Override
    @JsonProperty("colortxtbuttonsc")
    public String getColortxtbuttonsc() {
        return colortxtbuttonsc;
    }

    @Override
    @JsonProperty("fsbuttonsc")
    public Long getFsbuttonsc() {
        return fsbuttonsc;
    }

    @Override
    @JsonProperty("brbuttonsc")
    public Long getBrbuttonsc() {
        return brbuttonsc;
    }

    @Override
    @JsonProperty("leftimagesc")
    public com.adobe.cq.wcm.core.components.models.Image getLeftimagesc() {
        return leftimagesc;
    }

    @Override
    @JsonProperty("rightimagesc")
    public com.adobe.cq.wcm.core.components.models.Image getRightimagesc() {
        return rightimagesc;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
