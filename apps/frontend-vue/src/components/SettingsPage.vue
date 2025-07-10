<template>
  <div class="settings-page cf" style="padding: 1.5rem">
    <div class="settings-page__header">
      <div class="settings-page__titles settings-page__titles--left">
        <h1 class="settings-page__title">Your feature and its purpose</h1>
        <div class="settings-page__subtitle">Short description (optional)</div>
      </div>

      <div class="alert alert-success alert-icon">
        <div class="alert-inner">
          <div class="alert-content">
            <div class="icon">
              <span class="svg-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
                  <path
                    d="M34.5 67h-.13c-8.68-.03-16.83-3.45-22.94-9.61C5.32 51.23 1.97 43.06 2 34.38 2.07 16.52 16.65 2 34.5 2h.13c8.68.03 16.83 3.45 22.94 9.61 6.12 6.16 9.46 14.34 9.43 23.02C66.93 52.48 52.35 67 34.5 67zm0-62C18.3 5 5.06 18.18 5 34.39c-.03 7.88 3.01 15.3 8.56 20.89 5.55 5.59 12.95 8.69 20.83 8.72h.12c16.2 0 29.44-13.18 29.5-29.39.03-7.88-3.01-15.3-8.56-20.89C49.89 8.13 42.49 5.03 34.61 5h-.11z"
                  ></path>
                  <path
                    d="M32.17 46.67l-10.7-10.08c-.6-.57-.63-1.52-.06-2.12.57-.6 1.52-.63 2.12-.06l8.41 7.92 14.42-16.81c.54-.63 1.49-.7 2.12-.16.63.54.7 1.49.16 2.12L32.17 46.67z"
                  ></path>
                </svg>
              </span>
            </div>
            <div class="title">This is an example alert you can show in your app.</div>
            <div>
              Use the alert messages to catch users’ attention. If you want to let your users know
              about a problem or successful operation in your app, use the alerts.
              <a onclick="postOpenPage('#components.alerts')">See Alerts</a>
            </div>
          </div>
        </div>
      </div>

      <div class="named-area">
        <div class="named-area__header">
          <div class="named-area__titles">
            <div class="named-area__title">Instagram account</div>
            <div class="named-area__subtitle">
              To sell on Instagram, connect your Instagram account.
            </div>
          </div>
        </div>
        <div class="named-area__body">
          <div class="a-card-stack">
            <div class="a-card a-card--normal">
              <div class="a-card__paddings">
                <div class="feature-element has-icon">
                  <div class="feature-element__core">
                    <div class="feature-element__data">
                      <div class="feature-element__title">Set up your Instagram account</div>
                      <div class="feature-element__content">
                        <div class="feature-element__text">
                          <div class="titled-item">
                            <div class="titled-item__title"></div>
                            <div class="titled-item__content">
                              <div>
                                To create a storefront on Instagram, first check if your business
                                sells physical goods and is located in
                                <a
                                  href="https://help.instagram.com/321000045119159?ref=fbb_ig_shopping_setup"
                                  target="_blank"
                                  >supported markets</a
                                >. Make sure it complies with
                                <a
                                  href="https://www.facebook.com/policies/commerce?ref=fbb_ig_shopping_setup"
                                  target="_blank"
                                  >Facebook/Instagram Commerce Policies</a
                                >
                                and follow our step-by-step instructions to gain approval from
                                Instagram.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="feature-element__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="132"
                        height="132"
                        viewBox="0 0 132 132"
                      >
                        <defs>
                          <radialGradient
                            id="c"
                            cx="158.429"
                            cy="578.088"
                            r="65"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="matrix(0 -1.98198 1.8439 0 -1031.402 454.004)"
                            fx="158.429"
                            fy="578.088"
                          >
                            <stop offset="0" stop-color="#fd5"></stop>
                            <stop offset=".1" stop-color="#fd5"></stop>
                            <stop offset=".5" stop-color="#ff543e"></stop>
                            <stop offset="1" stop-color="#c837ab"></stop>
                          </radialGradient>
                          <radialGradient
                            id="d"
                            cx="147.694"
                            cy="473.455"
                            r="65"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="matrix(.17394 .86872 -3.5818 .71718 1648.348 -458.493)"
                            fx="147.694"
                            fy="473.455"
                          >
                            <stop offset="0" stop-color="#3771c8"></stop>
                            <stop stop-color="#3771c8" offset=".128"></stop>
                            <stop offset="1" stop-color="#60f" stop-opacity="0"></stop>
                          </radialGradient>
                        </defs>
                        <path
                          fill="url(#c)"
                          d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z"
                          transform="translate(1.004 1)"
                        ></path>
                        <path
                          fill="url(#d)"
                          d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z"
                          transform="translate(1.004 1)"
                        ></path>
                        <path
                          fill="#fff"
                          d="M66.004 18c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C18.06 51.327 18 52.964 18 66s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97c-3.18 0-5.76 2.577-5.76 5.758 0 3.18 2.58 5.76 5.76 5.76 3.18 0 5.76-2.58 5.76-5.76 0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C79.617 90.645 90.65 79.613 90.65 66S79.616 41.35 66.003 41.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="a-card a-card--compact a-card--has-hover">
              <div class="a-card__paddings">
                <div class="iconable-block iconable-block--info iconable-block--hide-in-mobile">
                  <div class="iconable-block__infographics">
                    <span class="iconable-block__icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56">
                        <path
                          d="M56 28a28 28 0 10-32.38 27.66V36.09h-7.1V28h7.1v-6.17c0-7 4.19-10.89 10.58-10.89a43.71 43.71 0 016.27.54v6.9h-3.53c-3.48 0-4.56 2.15-4.56 4.37V28h7.76l-1.24 8.09h-6.52v19.57A28 28 0 0056 28z"
                          fill="#1877f2"
                        ></path>
                        <path
                          d="M38.9 36.09L40.14 28h-7.76v-5.25c0-2.22 1.08-4.37 4.56-4.37h3.53v-6.9a43.71 43.71 0 00-6.27-.54c-6.39 0-10.58 3.87-10.58 10.89V28h-7.1v8.09h7.1v19.57a28.38 28.38 0 008.76 0V36.09z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div class="iconable-block__content">
                    <div class="cta-block">
                      <div class="cta-block__central">
                        <div class="cta-block__title">Step 1. Connect your Facebook page</div>
                        <div class="cta-block__content">
                          <div>
                            Connect your Facebook page to upload your product catalog to your
                            Facebook shop. Instagram will use your Facebook shop catalog to tag
                            products.
                          </div>
                        </div>
                      </div>
                      <div class="cta-block__cta">
                        <a class="btn btn-medium btn-primary" href="#fb-shops" target=""
                          >Connect Facebook</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="a-card a-card--compact a-card--has-hover">
              <div class="a-card__paddings">
                <div
                  class="iconable-block iconable-block--info iconable-block--disabled iconable-block--hide-in-mobile"
                >
                  <div class="iconable-block__infographics">
                    <span class="iconable-block__icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="132"
                        height="132"
                        viewBox="0 0 132 132"
                      >
                        <defs>
                          <radialGradient
                            id="c"
                            cx="158.429"
                            cy="578.088"
                            r="65"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="matrix(0 -1.98198 1.8439 0 -1031.402 454.004)"
                            fx="158.429"
                            fy="578.088"
                          >
                            <stop offset="0" stop-color="#fd5"></stop>
                            <stop offset=".1" stop-color="#fd5"></stop>
                            <stop offset=".5" stop-color="#ff543e"></stop>
                            <stop offset="1" stop-color="#c837ab"></stop>
                          </radialGradient>
                          <radialGradient
                            id="d"
                            cx="147.694"
                            cy="473.455"
                            r="65"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="matrix(.17394 .86872 -3.5818 .71718 1648.348 -458.493)"
                            fx="147.694"
                            fy="473.455"
                          >
                            <stop offset="0" stop-color="#3771c8"></stop>
                            <stop stop-color="#3771c8" offset=".128"></stop>
                            <stop offset="1" stop-color="#60f" stop-opacity="0"></stop>
                          </radialGradient>
                        </defs>
                        <path
                          fill="url(#c)"
                          d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z"
                          transform="translate(1.004 1)"
                        ></path>
                        <path
                          fill="url(#d)"
                          d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z"
                          transform="translate(1.004 1)"
                        ></path>
                        <path
                          fill="#fff"
                          d="M66.004 18c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C18.06 51.327 18 52.964 18 66s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97c-3.18 0-5.76 2.577-5.76 5.758 0 3.18 2.58 5.76 5.76 5.76 3.18 0 5.76-2.58 5.76-5.76 0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C79.617 90.645 90.65 79.613 90.65 66S79.616 41.35 66.003 41.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div class="iconable-block__content">
                    <div class="cta-block">
                      <div class="cta-block__central">
                        <div class="cta-block__title">Step 2. Connect your Instagram profile</div>
                        <div class="cta-block__content">
                          <div>
                            Select “Connect Instagram” and follow the on-screen instructions to
                            connect your Instagram account with your Facebook page. If your
                            Instagram account isn’t a business one yet, you’ll be asked to convert
                            it into one.
                          </div>
                        </div>
                      </div>
                      <div class="cta-block__cta"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="settings-page__body" style="padding-bottom: 0.1px">
      <div class="named-area">
        <div class="named-area__header">
          <div class="named-area__titles">
            <div class="named-area__title">Settings list</div>
            <div class="named-area__subtitle">
              The list of custom or predefined settings showing their status. If you make this
              section customizable, you need to hide it. Always place the Call to action list next
              to the Settings list.
              <a onclick="postOpenPage('#components.status-card')">See Status component</a>
            </div>
          </div>
        </div>
        <div class="named-area__body">
          <!-- StatusCard component -->
          <div class="a-card a-card--vertical-compact">
            <div class="a-card__paddings">
              <div class="iconable-block iconable-block--hide-in-mobile">
                <div class="iconable-block__infographics">
                  <span class="iconable-block__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 56 56"
                      fill="#189dee"
                      focusable="false"
                    >
                      <path
                        d="M36.76 30.51c-2.26 0-4.11 1.88-4.11 4.19s1.84 4.19 4.11 4.19 4.11-1.88 4.11-4.19-1.84-4.19-4.11-4.19zm0 6.38c-1.16 0-2.11-.98-2.11-2.19s.95-2.19 2.11-2.19 2.11.98 2.11 2.19-.95 2.19-2.11 2.19z"
                      ></path>
                      <path
                        d="M48.45 50c.94-1.08 1.55-2.47 1.55-3.91v-4.86c1.18-.98 2-2.68 2-3.91v-5.86c0-1.3-.84-2.86-2-3.75v-4.25c0-2.5-1.89-5.47-4.32-6.26l-1.2-3.39c-.65-2.17-2.65-3.68-4.88-3.68-.22 0-.44.02-.66.05L36.91 7.1c-.7-1.07-1.78-1.79-3.02-2.03-1.25-.22-2.49.04-3.49.73L12.71 17h-1.7C8.14 17 6 20.41 6 23.47V46.1c0 1.38.47 2.8 1.3 3.91H1v2h54v-2h-6.55zM50 37.33c0 1-1.18 2.67-1.88 2.67H35.71c-2.47 0-4.58-3.02-4.58-5.5s2.12-5.5 4.58-5.5h12.41c.74 0 1.88 1.5 1.88 2.47v5.86zm-7.42-22.89l.9 2.56H23.66l14.98-4.71.1-.03c1.59-.47 3.34.51 3.84 2.18zM31.51 7.47c.59-.41 1.29-.56 1.99-.42.71.14 1.33.55 1.73 1.16l1.68 2.54L16.99 17h-.54l15.06-9.53zM11.01 50C9.24 50 8 47.94 8 46.09V23.47C8 21.46 9.39 19 11.01 19h33.43c1.76 0 3.55 2.6 3.55 4.47V27H35.71c-3.71 0-6.58 4.03-6.58 7.5S32 42 35.71 42H48v4.09c0 1.93-1.79 3.91-3.55 3.91H11.01z"
                      ></path>
                      <path
                        d="M18.2 33.41c-1.48 0-2.59-.78-2.59-1.48s1.11-1.48 2.59-1.48 2.59.78 2.59 1.48c0 .61.5 1.11 1.11 1.11s1.1-.5 1.1-1.11c0-1.77-1.56-3.22-3.7-3.59v-1.2c0-.61-.5-1.11-1.11-1.11-.61 0-1.11.5-1.11 1.11v1.2c-2.14.37-3.7 1.82-3.7 3.59 0 2.07 2.11 3.69 4.8 3.69.28 0 2.59.78 2.59 1.48s-1.11 1.48-2.59 1.48c-1.48 0-2.59-.78-2.59-1.48 0-.61-.5-1.11-1.11-1.11s-1.11.5-1.11 1.11c0 1.77 1.56 3.22 3.7 3.59v1.2c0 .61.5 1.11 1.11 1.11.61 0 1.11-.5 1.11-1.11v-1.2c2.14-.37 3.7-1.82 3.7-3.59.01-2.07-2.1-3.69-4.79-3.69z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div class="iconable-block__content">
                  <div class="status-block">
                    <div class="status-block__central">
                      <div class="status-block__header">
                        <span class="status-block__title">Cash on delivery</span>
                        <span class="status-block__edit">Edit</span>
                      </div>
                      <div class="status-block__content">
                        <p>Set payment method description at customer checkout</p>
                      </div>
                    </div>
                    <div class="status-block__actions-dropdown">
                      <div class="btn-group dropdown-toggle">
                        <button
                          type="button"
                          class="btn btn-default btn-medium"
                          aria-hidden="true"
                          style="display: none"
                        ></button>
                        <div
                          class="btn btn-default btn-dropdown btn-medium list-dropdown-no-general-text"
                        >
                          <span class="btn-dropdown-container"
                            ><span class="actions">Actions</span></span
                          ><span class="icon-arr-down"></span>
                        </div>
                        <div class="list-dropdown list-dropdown-medium">
                          <ul>
                            <li><a>Rename</a></li>
                            <li><a>Sort</a></li>
                            <li><a>Delete</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="status-block__primary-action">
                      <label class="checkbox big">
                        <input name="" type="checkbox" checked="" />
                        <div>
                          <div></div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end of StatusCard component -->

          <!-- StatusCard component -->
          <div class="a-card a-card--vertical-compact">
            <div class="a-card__paddings">
              <div class="iconable-block iconable-block--hide-in-mobile">
                <div class="iconable-block__infographics">
                  <span class="iconable-block__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 56 56"
                      fill="#189dee"
                      focusable="false"
                    >
                      <path
                        d="M36.76 30.51c-2.26 0-4.11 1.88-4.11 4.19s1.84 4.19 4.11 4.19 4.11-1.88 4.11-4.19-1.84-4.19-4.11-4.19zm0 6.38c-1.16 0-2.11-.98-2.11-2.19s.95-2.19 2.11-2.19 2.11.98 2.11 2.19-.95 2.19-2.11 2.19z"
                      ></path>
                      <path
                        d="M48.45 50c.94-1.08 1.55-2.47 1.55-3.91v-4.86c1.18-.98 2-2.68 2-3.91v-5.86c0-1.3-.84-2.86-2-3.75v-4.25c0-2.5-1.89-5.47-4.32-6.26l-1.2-3.39c-.65-2.17-2.65-3.68-4.88-3.68-.22 0-.44.02-.66.05L36.91 7.1c-.7-1.07-1.78-1.79-3.02-2.03-1.25-.22-2.49.04-3.49.73L12.71 17h-1.7C8.14 17 6 20.41 6 23.47V46.1c0 1.38.47 2.8 1.3 3.91H1v2h54v-2h-6.55zM50 37.33c0 1-1.18 2.67-1.88 2.67H35.71c-2.47 0-4.58-3.02-4.58-5.5s2.12-5.5 4.58-5.5h12.41c.74 0 1.88 1.5 1.88 2.47v5.86zm-7.42-22.89l.9 2.56H23.66l14.98-4.71.1-.03c1.59-.47 3.34.51 3.84 2.18zM31.51 7.47c.59-.41 1.29-.56 1.99-.42.71.14 1.33.55 1.73 1.16l1.68 2.54L16.99 17h-.54l15.06-9.53zM11.01 50C9.24 50 8 47.94 8 46.09V23.47C8 21.46 9.39 19 11.01 19h33.43c1.76 0 3.55 2.6 3.55 4.47V27H35.71c-3.71 0-6.58 4.03-6.58 7.5S32 42 35.71 42H48v4.09c0 1.93-1.79 3.91-3.55 3.91H11.01z"
                      ></path>
                      <path
                        d="M18.2 33.41c-1.48 0-2.59-.78-2.59-1.48s1.11-1.48 2.59-1.48 2.59.78 2.59 1.48c0 .61.5 1.11 1.11 1.11s1.1-.5 1.1-1.11c0-1.77-1.56-3.22-3.7-3.59v-1.2c0-.61-.5-1.11-1.11-1.11-.61 0-1.11.5-1.11 1.11v1.2c-2.14.37-3.7 1.82-3.7 3.59 0 2.07 2.11 3.69 4.8 3.69.28 0 2.59.78 2.59 1.48s-1.11 1.48-2.59 1.48c-1.48 0-2.59-.78-2.59-1.48 0-.61-.5-1.11-1.11-1.11s-1.11.5-1.11 1.11c0 1.77 1.56 3.22 3.7 3.59v1.2c0 .61.5 1.11 1.11 1.11.61 0 1.11-.5 1.11-1.11v-1.2c2.14-.37 3.7-1.82 3.7-3.59.01-2.07-2.1-3.69-4.79-3.69z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div class="iconable-block__content">
                  <div class="status-block">
                    <div class="status-block__central">
                      <div class="status-block__header">
                        <span class="status-block__title">Some other setting</span>
                        <span class="status-block__edit">Edit</span>
                      </div>
                      <div class="status-block__content">
                        <p>Some description</p>
                      </div>
                    </div>
                    <div class="status-block__actions-dropdown">
                      <div class="btn-group dropdown-toggle">
                        <button
                          type="button"
                          class="btn btn-default btn-medium"
                          aria-hidden="true"
                          style="display: none"
                        ></button>
                        <div
                          class="btn btn-default btn-dropdown btn-medium list-dropdown-no-general-text"
                        >
                          <span class="btn-dropdown-container"
                            ><span class="actions">Actions</span></span
                          ><span class="icon-arr-down"></span>
                        </div>
                        <div class="list-dropdown list-dropdown-medium">
                          <ul>
                            <li><a>Rename</a></li>
                            <li><a>Sort</a></li>
                            <li><a>Delete</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="status-block__primary-action">
                      <label class="checkbox big">
                        <input name="" type="checkbox" checked="" />
                        <div>
                          <div></div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end of StatusCard component -->
        </div>
      </div>
      <div class="named-area">
        <div class="named-area__header">
          <div class="named-area__titles">
            <div class="named-area__title">Call to action list</div>
            <div class="named-area__subtitle">
              Use the options on the Call to action list to add them the Settings list. When you
              click an option from this list, it appears on the list above. Otherwise, you can use
              this list to add options for other actions, for example, moving to some other page.
              <a onclick="postOpenPage('#components.cta-card')">See Call to Action component</a>
            </div>
          </div>
          <div class="named-area__description"></div>
          <div class="named-area__additional"></div>
        </div>
        <div class="named-area__body">
          <div class="a-card a-card--compact a-card--has-hover">
            <div class="a-card__paddings">
              <div class="iconable-block">
                <div class="iconable-block__infographics">
                  <span class="iconable-block__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="#189dee"
                      focusable="false"
                    >
                      <path
                        d="M14 22c0-.55-.45-1-1.01-1H4c-.56 0-1 .45-1 1s.45 1 1 1h8.99c.56 0 1.01-.45 1.01-1zM14 17c0-.55-.45-1-1.01-1H1c-.56 0-1 .45-1 1s.45 1 1 1h11.99c.56 0 1.01-.45 1.01-1z"
                      ></path>
                      <path
                        d="M55.99 28.94v-.01c-.02-.53-.25-1.01-.6-1.36l-6.03-10.81c-.53-.97-1.87-1.76-2.98-1.76H37v-4.99C37 8.9 36.1 8 35 8H7c-1.11 0-2 .9-2 2.01V14h2v-4s28 0 28 .01V41H21.9c-.48-2.84-2.93-5-5.9-5s-5.42 2.16-5.9 4.99H7.01V25H5v15.99C5 42.1 5.9 43 7 43h3.09c.48 2.84 2.93 5 5.9 5s5.43-2.16 5.9-5h18.2c.48 2.84 2.94 5 5.91 5s5.43-2.16 5.91-5H54c1.1 0 2-.89 2-1.99V28.99c0-.02 0-.03-.01-.05zM15.99 46c-2.2 0-3.99-1.79-3.99-4s1.79-4 3.99-4 3.99 1.79 3.99 4-1.78 4-3.99 4zM37 17h9.38c.38 0 1.05.39 1.23.72L52.78 27H37V17zm9 29c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm8-5h-2.09c-.48-2.84-2.94-5-5.91-5s-5.43 2.16-5.91 5H37V29h17v12z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div class="iconable-block__content">
                  <div class="cta-block">
                    <div class="cta-block__central">
                      <div class="cta-block__title">Shipping & Delivery</div>
                      <div class="cta-block__content">
                        Set up simple flat rate shipping or use a provider like UPS, USPS, FedEx,
                        Canada Post, Australia Post or EMS Russian Post.
                      </div>
                    </div>
                    <div class="cta-block__cta">
                      <button type="button" class="btn btn-primary btn-medium">
                        <span>Add Shipping Method</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- CTACard component -->
          <div class="a-card a-card--compact a-card--has-hover">
            <div class="a-card__paddings">
              <div class="iconable-block">
                <div class="iconable-block__infographics">
                  <span class="iconable-block__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="#189dee"
                      focusable="false"
                    >
                      <path
                        d="M14 22c0-.55-.45-1-1.01-1H4c-.56 0-1 .45-1 1s.45 1 1 1h8.99c.56 0 1.01-.45 1.01-1zM14 17c0-.55-.45-1-1.01-1H1c-.56 0-1 .45-1 1s.45 1 1 1h11.99c.56 0 1.01-.45 1.01-1z"
                      ></path>
                      <path
                        d="M55.99 28.94v-.01c-.02-.53-.25-1.01-.6-1.36l-6.03-10.81c-.53-.97-1.87-1.76-2.98-1.76H37v-4.99C37 8.9 36.1 8 35 8H7c-1.11 0-2 .9-2 2.01V14h2v-4s28 0 28 .01V41H21.9c-.48-2.84-2.93-5-5.9-5s-5.42 2.16-5.9 4.99H7.01V25H5v15.99C5 42.1 5.9 43 7 43h3.09c.48 2.84 2.93 5 5.9 5s5.43-2.16 5.9-5h18.2c.48 2.84 2.94 5 5.91 5s5.43-2.16 5.91-5H54c1.1 0 2-.89 2-1.99V28.99c0-.02 0-.03-.01-.05zM15.99 46c-2.2 0-3.99-1.79-3.99-4s1.79-4 3.99-4 3.99 1.79 3.99 4-1.78 4-3.99 4zM37 17h9.38c.38 0 1.05.39 1.23.72L52.78 27H37V17zm9 29c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm8-5h-2.09c-.48-2.84-2.94-5-5.91-5s-5.43 2.16-5.91 5H37V29h17v12z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div class="iconable-block__content">
                  <div class="cta-block">
                    <div class="cta-block__central">
                      <div class="cta-block__title">Some other action</div>
                      <div class="cta-block__content">Description of Some other action</div>
                    </div>
                    <div class="cta-block__cta">
                      <button type="button" class="btn btn-primary btn-medium">
                        <span>Action</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end of CTACard component -->
        </div>
      </div>
      <div class="named-area">
        <div class="named-area__header">
          <div class="named-area__titles">
            <div class="named-area__title">Settings Blocks</div>
            <div class="named-area__subtitle">
              Here you can place all the feature settings or add extra information about how your
              feature works.
              <a onclick="postOpenPage('#page-template.forms')">See Settings Forms</a>
            </div>
          </div>
          <div class="named-area__description"></div>
          <div class="named-area__additional"></div>
        </div>
        <div class="named-area__body">
          <div class="a-card a-card--normal">
            <div class="a-card__paddings">
              <ul class="titled-items-list titled-items-list--ordered">
                <li class="titled-items-list__item titled-item">
                  <div class="titled-item__title">Feature Card</div>
                  <div class="titled-item__content">Like in example above</div>
                </li>
                <li class="titled-items-list__item titled-item">
                  <div class="titled-item__title">A-card with "Titled Items List"</div>
                  <div class="titled-item__content">Like this card</div>
                </li>
                <li class="titled-item titled-items-list__item">
                  <div class="titled-item__title">A-card with form</div>
                  <div class="titled-item__content">Like in example below</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="a-card a-card--normal">
            <div class="a-card__paddings">
              <div class="form-area">
                <div class="form-area__content">
                  <div class="fieldsets-batch">
                    <div class="fieldset">
                      <div class="fieldset__title">Field can have a title...</div>
                      <div class="field field--medium">
                        <span class="fieldset__svg-icon"></span>
                        <label class="field__label">Instruction Title</label>
                        <input type="text" class="field__input" tabindex="4" maxlength="64" />
                        <div class="field__placeholder">Instruction Title</div>
                        <span class="field-state--success">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26px"
                            height="26px"
                            viewBox="0 0 26 26"
                            focusable="false"
                          >
                            <path
                              d="M5 12l5.02 4.9L21.15 4c.65-.66 1.71-.66 2.36 0 .65.67.65 1.74 0 2.4l-12.3 14.1c-.33.33-.76.5-1.18.5-.43 0-.86-.17-1.18-.5l-6.21-6.1c-.65-.66-.65-1.74 0-2.41.65-.65 1.71-.65 2.36.01z"
                            ></path>
                          </svg>
                        </span>
                        <span class="field-state--close">
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 16 16"
                            enable-background="new 0 0 16 16"
                            xml:space="preserve"
                            focusable="false"
                          >
                            <path
                              d="M15.6,15.5c-0.53,0.53-1.38,0.53-1.91,0L8.05,9.87L2.31,15.6c-0.53,0.53-1.38,0.53-1.91,0c-0.53-0.53-0.53-1.38,0-1.9l5.65-5.64L0.4,2.4c-0.53-0.53-0.53-1.38,0-1.91c0.53-0.53,1.38-0.53,1.91,0l5.64,5.63l5.74-5.73c0.53-0.53,1.38-0.53,1.91,0c0.53,0.53,0.53,1.38,0,1.91L9.94,7.94l5.66,5.65C16.12,14.12,16.12,14.97,15.6,15.5z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                      <div class="field__error" aria-hidden="true" style="display: none"></div>
                      <div class="fieldset__note">...and some description below</div>
                    </div>
                  </div>
                </div>

                <div class="form-area__content">
                  <div class="fieldsets-batch">
                    <div class="fieldset fieldset--select fieldset--no-label">
                      <div class="fieldset__title">One more field</div>
                      <div>
                        <div>
                          <div class="field field--medium field--filled">
                            <label class="field__label"></label>
                            <select class="field__select" tabindex="1">
                              <option value="NEW">New</option>
                              <option value="REFURBISHED">Refurbished</option>
                              <option value="USED">Used</option>
                            </select>
                            <div class="field__placeholder"></div>
                            <span class="field-state--success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26px"
                                height="26px"
                                viewBox="0 0 26 26"
                                focusable="false"
                              >
                                <path
                                  d="M5 12l5.02 4.9L21.15 4c.65-.66 1.71-.66 2.36 0 .65.67.65 1.74 0 2.4l-12.3 14.1c-.33.33-.76.5-1.18.5-.43 0-.86-.17-1.18-.5l-6.21-6.1c-.65-.66-.65-1.74 0-2.41.65-.65 1.71-.65 2.36.01z"
                                ></path>
                              </svg>
                            </span>
                            <span class="field-state--close">
                              <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                viewBox="0 0 16 16"
                                enable-background="new 0 0 16 16"
                                xml:space="preserve"
                                focusable="false"
                              >
                                <path
                                  d="M15.6,15.5c-0.53,0.53-1.38,0.53-1.91,0L8.05,9.87L2.31,15.6c-0.53,0.53-1.38,0.53-1.91,0 c-0.53-0.53-0.53-1.38,0-1.9l5.65-5.64L0.4,2.4c-0.53-0.53-0.53-1.38,0-1.91c0.53-0.53,1.38-0.53,1.91,0l5.64,5.63l5.74-5.73 c0.53-0.53,1.38-0.53,1.91,0c0.53,0.53,0.53,1.38,0,1.91L9.94,7.94l5.66,5.65C16.12,14.12,16.12,14.97,15.6,15.5z"
                                ></path>
                              </svg>
                            </span>
                            <span class="field__arrow">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 26 26"
                                focusable="false"
                              >
                                <path
                                  d="M7.85 10l5.02 4.9 5.27-4.9c.65-.66 1.71-.66 2.36 0 .65.67.65 1.74 0 2.4l-6.45 6.1c-.33.33-.76.5-1.18.5-.43 0-.86-.17-1.18-.5l-6.21-6.1c-.65-.66-.65-1.74 0-2.41.66-.65 1.72-.65 2.37.01z"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div class="field__error" aria-hidden="true" style="display: none"></div>
                      </div>
                      <div class="fieldset__note"></div>
                    </div>
                  </div>
                </div>

                <div class="form-area__action">
                  <button type="button" class="btn btn-primary btn-medium" tabindex="5">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
