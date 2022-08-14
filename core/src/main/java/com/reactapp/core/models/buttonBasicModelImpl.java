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
    buttonBasicModel.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class buttonBasicModelImpl
    implements buttonBasicModel
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String txtbuttonbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorbuttonbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colortxtbuttonbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long fsbuttonbs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long brbuttonbs;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image leftimagebs;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image rightimagebs;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("txtbuttonbs")
    public String getTxtbuttonbs() {
        return txtbuttonbs;
    }

    @Override
    @JsonProperty("colorbuttonbs")
    public String getColorbuttonbs() {
        return colorbuttonbs;
    }

    @Override
    @JsonProperty("colortxtbuttonbs")
    public String getColortxtbuttonbs() {
        return colortxtbuttonbs;
    }

    @Override
    @JsonProperty("fsbuttonbs")
    public Long getFsbuttonbs() {
        return fsbuttonbs;
    }

    @Override
    @JsonProperty("brbuttonbs")
    public Long getBrbuttonbs() {
        return brbuttonbs;
    }

    @Override
    @JsonProperty("leftimagebs")
    public com.adobe.cq.wcm.core.components.models.Image getLeftimagebs() {
        return leftimagebs;
    }

    @Override
    @JsonProperty("rightimagebs")
    public com.adobe.cq.wcm.core.components.models.Image getRightimagebs() {
        return rightimagebs;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
