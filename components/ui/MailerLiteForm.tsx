"use client";

import { useEffect } from "react";
import Script from "next/script";

/**
 * MailerLiteForm — Berracast
 *
 * Renderiza el formulario con la estructura exacta que MailerLite necesita
 * (IDs, clases, action, field names, hidden inputs) pero con estilos
 * de Berracast aplicados encima mediante overrides CSS.
 *
 * El JS de MailerLite maneja validación, submit y la redirección al WhatsApp
 * via ml_webform_success_44285812().
 */
export function MailerLiteForm() {
  return (
    <>
      {/* ── CSS overrides: reemplaza estilos default de MailerLite ── */}
      <style>{`
        /* Reset ML wrapper */
        #mlb2-44285812.ml-form-embedContainer {
          box-sizing: border-box;
          display: block;
          width: 100% !important;
          background: transparent !important;
        }

        #mlb2-44285812 .ml-form-embedWrapper {
          background-color: transparent !important;
          border: none !important;
          border-radius: 0 !important;
          width: 100% !important;
          max-width: 100% !important;
          display: block !important;
        }

        #mlb2-44285812 .ml-form-embedBody {
          padding: 0 !important;
        }

        /* Labels */
        #mlb2-44285812 .ml-field-group label {
          color: #fb923c !important;
          font-family: inherit !important;
          font-size: 10px !important;
          font-weight: 900 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.25em !important;
          margin-bottom: 6px !important;
          display: block !important;
        }

        /* Inputs */
        #mlb2-44285812 .ml-form-fieldRow input[type="text"],
        #mlb2-44285812 .ml-form-fieldRow input[type="email"] {
          background-color: #000000 !important;
          color: #ffffff !important;
          border: 2px solid #3f3f46 !important;
          border-radius: 0 !important;
          font-family: inherit !important;
          font-size: 14px !important;
          padding: 12px 16px !important;
          width: 100% !important;
          box-sizing: border-box !important;
          outline: none !important;
          transition: border-color 0.15s !important;
        }

        #mlb2-44285812 .ml-form-fieldRow input[type="text"]:focus,
        #mlb2-44285812 .ml-form-fieldRow input[type="email"]:focus {
          border-color: #f97316 !important;
        }

        #mlb2-44285812 .ml-form-fieldRow input::placeholder {
          color: #52525b !important;
        }

        /* Field row spacing */
        #mlb2-44285812 .ml-form-fieldRow {
          margin: 0 0 16px 0 !important;
          width: 100% !important;
        }

        #mlb2-44285812 .ml-form-fieldRow.ml-last-item {
          margin: 0 0 24px 0 !important;
        }

        /* Submit area */
        #mlb2-44285812 .ml-form-embedSubmit {
          margin: 0 !important;
          float: none !important;
          width: 100% !important;
        }

        /* Submit button */
        #mlb2-44285812 .ml-form-embedSubmit button.primary {
          background-color: #ea580c !important;
          border: 2px solid #fb923c !important;
          border-radius: 0 !important;
          color: #000000 !important;
          font-family: inherit !important;
          font-size: 13px !important;
          font-weight: 900 !important;
          letter-spacing: 0.15em !important;
          text-transform: uppercase !important;
          padding: 16px 32px !important;
          width: 100% !important;
          cursor: pointer !important;
          transition: background-color 0.15s !important;
          text-align: center !important;
        }

        #mlb2-44285812 .ml-form-embedSubmit button.primary:hover {
          background-color: #f97316 !important;
        }

        #mlb2-44285812 .ml-form-embedSubmit button.primary:active {
          transform: translateY(1px) !important;
        }

        /* Loading button */
        #mlb2-44285812 .ml-form-embedSubmit button.loading {
          background-color: #ea580c !important;
          border: 2px solid #fb923c !important;
          border-radius: 0 !important;
          width: 100% !important;
          padding: 16px !important;
          align-items: center !important;
          justify-content: center !important;
        }

        /* Loader spinner */
        #mlb2-44285812 .ml-form-embedSubmitLoad {
          display: inline-block;
          width: 20px;
          height: 20px;
        }
        #mlb2-44285812 .ml-form-embedSubmitLoad:after {
          content: " ";
          display: block;
          width: 14px;
          height: 14px;
          margin: 2px;
          border-radius: 50%;
          border: 3px solid #000;
          border-color: #000 #000 #000 transparent;
          animation: ml-spin 1.2s linear infinite;
        }
        @keyframes ml-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Success body */
        #mlb2-44285812 .ml-form-successBody {
          padding: 0 !important;
        }

        #mlb2-44285812 .ml-form-successContent h4 {
          color: #f97316 !important;
          font-family: inherit !important;
          font-size: 24px !important;
          font-weight: 900 !important;
          text-transform: uppercase !important;
          letter-spacing: -0.02em !important;
          margin: 0 0 8px 0 !important;
        }

        #mlb2-44285812 .ml-form-successContent p {
          color: #a1a1aa !important;
          font-family: inherit !important;
          font-size: 14px !important;
        }

        /* Error states */
        #mlb2-44285812 .ml-error input {
          border-color: #ef4444 !important;
        }
        #mlb2-44285812 .ml-error label:first-child {
          color: #ef4444 !important;
        }

        /* sr-only */
        #mlb2-44285812 .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          border: 0;
        }
      `}</style>

      {/* ── MailerLite form structure (IDs y clases requeridas por el JS) ── */}
      <div
        id="mlb2-44285812"
        className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-44285812"
      >
        <div className="ml-form-align-left">
          <div className="ml-form-embedWrapper embedForm">

            {/* Form body */}
            <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
              <div className="ml-form-embedContent" style={{ marginBottom: 0 }} />

              <form
                className="ml-block-form"
                action="https://assets.mailerlite.com/jsonp/482562/forms/194367558257738773/subscribe"
                data-code=""
                method="post"
                target="_blank"
              >
                <div className="ml-form-formContent">

                  {/* Name */}
                  <div className="ml-form-fieldRow">
                    <div className="ml-field-group ml-field-name ml-validate-required">
                      <label>Nombre completo</label>
                      <input
                        aria-label="name"
                        aria-required="true"
                        type="text"
                        className="form-control"
                        name="fields[name]"
                        placeholder="Tu nombre completo"
                        autoComplete="given-name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="ml-form-fieldRow">
                    <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                      <label>Correo electrónico</label>
                      <input
                        aria-label="email"
                        aria-required="true"
                        type="email"
                        className="form-control"
                        name="fields[email]"
                        placeholder="tu@correo.com"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  {/* Phone / WhatsApp — prefix selector + number */}
                  <div className="ml-form-fieldRow ml-last-item">
                    <div className="ml-field-group ml-field-phone ml-validate-required">
                      <label>Número de WhatsApp</label>
                      <div style={{ display: "flex", gap: "8px" }}>
                        {/* Country code selector */}
                        <select
                          id="wa-prefix"
                          aria-label="Prefijo de país"
                          style={{
                            backgroundColor: "#000",
                            color: "#fff",
                            border: "2px solid #3f3f46",
                            borderRadius: 0,
                            padding: "12px 8px",
                            fontSize: "14px",
                            fontFamily: "inherit",
                            width: "130px",
                            flexShrink: 0,
                            outline: "none",
                            cursor: "pointer",
                          }}
                          onChange={(e) => {
                            const num = (document.getElementById("wa-number") as HTMLInputElement)?.value ?? "";
                            const hidden = document.getElementById("wa-phone-hidden") as HTMLInputElement;
                            if (hidden) hidden.value = e.target.value + " " + num;
                          }}
                          defaultValue="+57"
                        >
                          <option value="+57">🇨🇴 +57</option>
                          <option value="+52">🇲🇽 +52</option>
                          <option value="+54">🇦🇷 +54</option>
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+34">🇪🇸 +34</option>
                          <option value="+58">🇻🇪 +58</option>
                          <option value="+593">🇪🇨 +593</option>
                          <option value="+51">🇵🇪 +51</option>
                          <option value="+56">🇨🇱 +56</option>
                          <option value="+591">🇧🇴 +591</option>
                          <option value="+595">🇵🇾 +595</option>
                          <option value="+598">🇺🇾 +598</option>
                          <option value="+506">🇨🇷 +506</option>
                          <option value="+507">🇵🇦 +507</option>
                          <option value="+503">🇸🇻 +503</option>
                          <option value="+502">🇬🇹 +502</option>
                          <option value="+504">🇭🇳 +504</option>
                          <option value="+505">🇳🇮 +505</option>
                        </select>

                        {/* Number input */}
                        <input
                          id="wa-number"
                          aria-label="phone"
                          aria-required="true"
                          type="text"
                          className="form-control"
                          placeholder="300 000 0000"
                          style={{ flex: 1 }}
                          onChange={(e) => {
                            const prefix = (document.getElementById("wa-prefix") as HTMLSelectElement)?.value ?? "+57";
                            const hidden = document.getElementById("wa-phone-hidden") as HTMLInputElement;
                            if (hidden) hidden.value = prefix + " " + e.target.value;
                          }}
                        />
                      </div>

                      {/* Hidden field that MailerLite reads — gets the full combined value */}
                      <input
                        id="wa-phone-hidden"
                        type="hidden"
                        name="fields[phone]"
                        defaultValue="+57 "
                      />
                    </div>
                  </div>

                </div>

                {/* Hidden ML fields */}
                <input type="hidden" name="ml-submit" value="1" />

                {/* Submit */}
                <div className="ml-form-embedSubmit">
                  <button type="submit" className="primary">
                    ⚡ Unirme a la comunidad →
                  </button>
                  <button
                    disabled
                    style={{ display: "none" }}
                    type="button"
                    className="loading"
                  >
                    <div className="ml-form-embedSubmitLoad" />
                    <span className="sr-only">Cargando...</span>
                  </button>
                </div>

                <input type="hidden" name="anticsrf" value="true" />
              </form>
            </div>

            {/* Success message (ML lo muestra automáticamente) */}
            <div className="ml-form-successBody row-success" style={{ display: "none" }}>
              <div className="ml-form-successContent">
                <h4>¡Estás dentro! 🔥</h4>
                <p>Redirigiendo a la comunidad de WhatsApp...</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Success redirect → WhatsApp */}
      <Script id="ml-success-callback" strategy="afterInteractive">{`
        function ml_webform_success_44285812() {
          try {
            window.top.location.href = 'https://chat.whatsapp.com/KE647YoWM4m7KKgr28bmYL';
          } catch(e) {
            window.location.href = 'https://chat.whatsapp.com/KE647YoWM4m7KKgr28bmYL';
          }
        }
      `}</Script>

      {/* MailerLite webforms JS */}
      <Script
        src="https://groot.mailerlite.com/js/w/webforms.min.js?v83147fa8ce2d95cb73ece7f28b469519"
        strategy="afterInteractive"
      />
    </>
  );
}
