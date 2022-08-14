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

import java.util.List;
import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code Geralpage} Sling Model used for the {@code reactapp/components/geralpage} component.
 * 
 */
@ConsumerType
public interface Geralpage
    extends ComponentExporter
{


    @JsonProperty("fonts")
    String getFonts();

    @JsonProperty("title")
    String getTitle();

    @JsonProperty("titlecolor")
    String getTitlecolor();

    @JsonProperty("fstitle")
    Long getFstitle();

    @JsonProperty("bgpage")
    String getBgpage();

    @JsonProperty("bgform")
    String getBgform();

    @JsonProperty("colorcomp")
    String getColorcomp();

    List<headerBasicModel> getHeaderbasic();

    List<navBasicModel> getNavbasic();

    List<inputBasicModel> getInputbasic();

    List<birthBasicModel> getBirthbasic();

    List<checkBasicModel> getCheckbasic();

    List<buttonBasicModel> getButtonbasic();

    List<certBasicModel> getCertbasic();

    List<headerSocialModel> getHeadersocial();

    List<navSocialModel> getNavsocial();

    List<inputSocialModel> getInputsocial();

    List<birthSocialModel> getBirthsocial();

    List<checkSocialModel> getChecksocial();

    List<buttonSocialModel> getButtonsocial();

    List<certSocialModel> getCertsocial();

    List<headerCertificateModel> getHeadercertificate();

    List<navCertificateModel> getNavcertificate();

    List<inputCertificateModel> getInputcertificate();

    List<birthCertificateModel> getBirthcertificate();

    List<checkCertificateModel> getCheckcertificate();

    List<buttonCertificateModel> getButtoncertificate();

    List<certCertificateModel> getCertcertificate();

    List<headerResultModel> getHeaderresult();

    @JsonProperty("colorresult")
    String getColorresult();

    List<buttonResultModel> getButtonresult();

}
