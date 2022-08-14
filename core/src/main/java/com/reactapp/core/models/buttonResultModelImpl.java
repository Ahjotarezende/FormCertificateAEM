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
    buttonResultModel.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class buttonResultModelImpl
    implements buttonResultModel
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String txtbuttonrs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorbuttonrs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colortxtbuttonrs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long fsbuttonrs;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long brbuttonrs;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image leftimagers;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image rightimagers;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("txtbuttonrs")
    public String getTxtbuttonrs() {
        return txtbuttonrs;
    }

    @Override
    @JsonProperty("colorbuttonrs")
    public String getColorbuttonrs() {
        return colorbuttonrs;
    }

    @Override
    @JsonProperty("colortxtbuttonrs")
    public String getColortxtbuttonrs() {
        return colortxtbuttonrs;
    }

    @Override
    @JsonProperty("fsbuttonrs")
    public Long getFsbuttonrs() {
        return fsbuttonrs;
    }

    @Override
    @JsonProperty("brbuttonrs")
    public Long getBrbuttonrs() {
        return brbuttonrs;
    }

    @Override
    @JsonProperty("leftimagers")
    public com.adobe.cq.wcm.core.components.models.Image getLeftimagers() {
        return leftimagers;
    }

    @Override
    @JsonProperty("rightimagers")
    public com.adobe.cq.wcm.core.components.models.Image getRightimagers() {
        return rightimagers;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
