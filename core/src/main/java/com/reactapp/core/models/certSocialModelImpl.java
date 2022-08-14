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
    certSocialModel.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class certSocialModelImpl
    implements certSocialModel
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelcertsc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorlabelcertsc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorbtsc;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image leftimagecertsc;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image rightimagecertsc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String txtcertsc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colortxtcertsc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long fstxtcertsc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long brbtcertsc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String bgopcertsc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorbtmoresc;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image leftimagemoresc;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image rightimagemoresc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String txtmoresc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colortxtmoresc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long fstxtmoresc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long brbtmoresc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorerrorcertsc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String phcertsc;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String errortextsc;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("labelcertsc")
    public String getLabelcertsc() {
        return labelcertsc;
    }

    @Override
    @JsonProperty("colorlabelcertsc")
    public String getColorlabelcertsc() {
        return colorlabelcertsc;
    }

    @Override
    @JsonProperty("colorbtsc")
    public String getColorbtsc() {
        return colorbtsc;
    }

    @Override
    @JsonProperty("leftimagecertsc")
    public com.adobe.cq.wcm.core.components.models.Image getLeftimagecertsc() {
        return leftimagecertsc;
    }

    @Override
    @JsonProperty("rightimagecertsc")
    public com.adobe.cq.wcm.core.components.models.Image getRightimagecertsc() {
        return rightimagecertsc;
    }

    @Override
    @JsonProperty("txtcertsc")
    public String getTxtcertsc() {
        return txtcertsc;
    }

    @Override
    @JsonProperty("colortxtcertsc")
    public String getColortxtcertsc() {
        return colortxtcertsc;
    }

    @Override
    @JsonProperty("fstxtcertsc")
    public Long getFstxtcertsc() {
        return fstxtcertsc;
    }

    @Override
    @JsonProperty("brbtcertsc")
    public Long getBrbtcertsc() {
        return brbtcertsc;
    }

    @Override
    @JsonProperty("bgopcertsc")
    public String getBgopcertsc() {
        return bgopcertsc;
    }

    @Override
    @JsonProperty("colorbtmoresc")
    public String getColorbtmoresc() {
        return colorbtmoresc;
    }

    @Override
    @JsonProperty("leftimagemoresc")
    public com.adobe.cq.wcm.core.components.models.Image getLeftimagemoresc() {
        return leftimagemoresc;
    }

    @Override
    @JsonProperty("rightimagemoresc")
    public com.adobe.cq.wcm.core.components.models.Image getRightimagemoresc() {
        return rightimagemoresc;
    }

    @Override
    @JsonProperty("txtmoresc")
    public String getTxtmoresc() {
        return txtmoresc;
    }

    @Override
    @JsonProperty("colortxtmoresc")
    public String getColortxtmoresc() {
        return colortxtmoresc;
    }

    @Override
    @JsonProperty("fstxtmoresc")
    public Long getFstxtmoresc() {
        return fstxtmoresc;
    }

    @Override
    @JsonProperty("brbtmoresc")
    public Long getBrbtmoresc() {
        return brbtmoresc;
    }

    @Override
    @JsonProperty("colorerrorcertsc")
    public String getColorerrorcertsc() {
        return colorerrorcertsc;
    }

    @Override
    @JsonProperty("phcertsc")
    public String getPhcertsc() {
        return phcertsc;
    }

    @Override
    @JsonProperty("errortextsc")
    public String getErrortextsc() {
        return errortextsc;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
