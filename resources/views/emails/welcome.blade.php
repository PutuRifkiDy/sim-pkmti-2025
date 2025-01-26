<!DOCTYPE html>
<html>

<head>
  <title></title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <style type="text/css">
    @media screen {
      @font-face {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        src: local("Lato Regular"), local("Lato-Regular"),
          url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format("woff");
      }

      @font-face {
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        src: local("Lato Bold"), local("Lato-Bold"),
          url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format("woff");
      }

      @font-face {
        font-family: "Lato";
        font-style: italic;
        font-weight: 400;
        src: local("Lato Italic"), local("Lato-Italic"),
          url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format("woff");
      }

      @font-face {
        font-family: "Lato";
        font-style: italic;
        font-weight: 700;
        src: local("Lato Bold Italic"), local("Lato-BoldItalic"),
          url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format("woff");
      }
    }

    /* CLIENT-SPECIFIC STYLES */
    body,
    table,
    td,
    a {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    table,
    td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    img {
      -ms-interpolation-mode: bicubic;
    }

    /* RESET STYLES */
    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
    }

    table {
      border-collapse: collapse !important;
    }

    body {
      height: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
      width: 100% !important;
    }

    /* iOS BLUE LINKS */
    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }

    p {
      color: #666666
    }

    /* MOBILE STYLES */
    @media screen and (max-width: 600px) {
      h1 {
        font-size: 32px !important;
        line-height: 32px !important;
      }
    }

    /* ANDROID CENTER FIX */
    div[style*="margin: 16px 0;"] {
      margin: 0 !important;
    }
  </style>
</head>

<body style="
      background-color: #f4f4f4;
      margin: 0 !important;
      padding: 0 !important;
    ">
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
    <!-- LOGO -->
    <tr>
      <td style="background: linear-gradient(100deg, #1d4489 0%, #96d8e8 100%)" ; align="center">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px">
          <tr>
            <td align="center" valign="top" style="padding: 40px 10px 40px 10px"></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="background: linear-gradient(100deg, #1d4489 0%, #96d8e8 100%)" ; align="center"
        style="padding: 0px 10px 0px 10px">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px">
          <tr>
            <td bgcolor="#ffffff" align="center" valign="top"
              style="
                  padding: 40px 20px 20px 20px;
                  border-radius: 4px 4px 0px 0px;
                  color: #111111;
                  font-family: 'Lato', Helvetica, Arial, sans-serif;
                  font-size: 48px;
                  font-weight: 400;
                  letter-spacing: 4px;
                  line-height: 48px;
                ">
              <img src="https://i.ibb.co/d2L1CZb/Logo-PKM-TI.png" width="125" style="display: block; border: 0px" />
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="background: linear-gradient(100deg, #1d4489 0%, #96d8e8 100%)" ; align="center"
        style="padding: 0px 10px 0px 10px">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px">
          <tr>
            <td bgcolor="#ffffff" align="left"
              style="
                  padding: 10px 30px 40px 30px;
                  color: #666666;
                  font-family: 'Lato', Helvetica, Arial, sans-serif;
                  font-size: 18px;
                  font-weight: 400;
                  line-height: 25px;
                ">
              <p style="margin: 0">Hai {{ $name }}, 👋</p>
              <p style="color: #666666">
                Wah, kabar baik nih! Kamu udah resmi terdaftar di Program
                Kreativitas Mahasiswa Teknologi Informasi (PKM TI)! Keren
                banget loh kamu mau ikutan dan jadi bagian dari perjalanan
                kreatif ini.
              </p style="color: #666666">
              <p>
                Ada beberapa langkah nih yang bisa kamu lakuin untuk
                melancarkan perjalananmu di PKM:
              </p>
              <ul>
                <li style="color: #666666">
                  <strong>Membentuk Tim:</strong>
                  Buat tim PKM kamu dengan teman-teman yang punya ide keren
                  dan semangat yang sama. Jangan lupa mendaftarkan tim kamu di
                  web PKM TI yah!
                </li>
                <li style="color: #666666">
                  <strong>Baca Panduan:</strong>
                  Download panduan PKM buat lebih paham tentang aturan
                  mainnya. Gak perlu bingung, semua info penting ada di sana!
                </li>
                <li style="color: #666666">
                  <strong>Menentukan Ide:</strong>
                  Buat daftar ide-idemu, gak perlu ragu-ragu. Nanti bisa
                  dipilah-pilah, siapa tahu ada yang bisa jadi bahan PKM yang
                  keren!
                </li>
                <li style="color: #666666">
                  <strong>Merancang Proposal:</strong>
                  Proposal itu kayak cerita, jadi jangan lupa buat pembaca
                  tertarik dari awal. Jelaskan ide, tujuan, dan rencana dengan
                  gaya yang menyenangkan. Inget yah, patuhi juga aturan
                  penulisan proposal PKM sesuai panduan.
                </li>
                <li style="color: #666666">
                  <strong>Mencari Dosen Pembimbing:</strong>
                  Cari dosen pembimbing yang punya pengalaman atau minat
                  serupa dengan topik PKM-mu. Ini penting agar kamu
                  mendapatkan bimbingan yang tepat.
                </li>
                <li style="color: #666666">
                  <strong>Tanya-Tanya Aja:</strong>
                  Kalo ada yang bingung atau mau diskusi ide, langsung aja nih
                  tanya para panitia PKM TI. Mereka ramah banget loh!
                </li>
              </ul>

              <p style="color: #666666">
                Terima kasih sudah mendaftar. Selamat menikmati serunya PKM
                TI, yuk buat kegiatan ini berkesan! 🥳
              </p>
              <p style="color: #666666">
                Cheers,<br />
                Tim Ilmiah PKM TI
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td bgcolor="#f4f4f4" align="center" style="padding: 30px 10px 0px 10px">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px">
          <tr>
            <td bgcolor="#3868B2" align="center"
              style="
                  padding: 30px 30px 30px 30px;
                  border-radius: 4px 4px 4px 4px;
                  color: #fff;
                  font-family: 'Lato', Helvetica, Arial, sans-serif;
                  font-size: 18px;
                  font-weight: 400;
                  line-height: 25px;
                ">
              <p style="color: white">PKM TI 2024<br />
                Grow Up The Passion, Change The Vision
              </p>
              <div class="flex flex-row gap-6">
                <a href="https://www.facebook.com/ITCC.Udayana" target="_blank" class="p-2 rounded-xl text-white"><svg
                    width="24" height="24" viewBox="0 0 0.72 0.72" xmlns="http://www.w3.org/2000/svg"
                    class="fill-current">
                    <path
                      d="M.42.18h.09A.03.03 0 0 0 .54.15V.09A.03.03 0 0 0 .51.06H.42a.15.15 0 0 0-.15.15V.3H.21a.03.03 0 0 0-.03.03v.06a.03.03 0 0 0 .03.03h.06v.21A.03.03 0 0 0 .3.66h.06A.03.03 0 0 0 .39.63V.42h.067a.03.03 0 0 0 .03-.023l.015-.06A.03.03 0 0 0 .472.3H.39V.21A.03.03 0 0 1 .42.18Z" />
                  </svg>
                </a>
                <a href="http://www.tiktok.com/@itccudayana" target="_blank" class="p-2 rounded-xl text-white"><svg
                    width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                    class="fill-current">
                    <path
                      d="M19.321 5.562a5.122 5.122 0 0 1 -0.443 -0.258 6.228 6.228 0 0 1 -1.138 -0.967c-0.848 -0.971 -1.165 -1.956 -1.282 -2.645h0.005C16.366 1.12 16.406 0.75 16.412 0.75h-3.864v14.943c0 0.201 0 0.399 -0.008 0.595 0 0.024 -0.002 0.047 -0.004 0.073 0 0.011 0 0.022 -0.002 0.033v0.008a3.281 3.281 0 0 1 -1.651 2.604 3.225 3.225 0 0 1 -1.599 0.422c-1.8 0 -3.26 -1.468 -3.26 -3.281s1.459 -3.281 3.26 -3.281a3.23 3.23 0 0 1 1.004 0.159l0.005 -3.935a7.178 7.178 0 0 0 -5.531 1.618 7.584 7.584 0 0 0 -1.655 2.04c-0.163 0.281 -0.779 1.411 -0.853 3.246 -0.047 1.041 0.266 2.12 0.415 2.565v0.009c0.094 0.262 0.457 1.158 1.049 1.913A7.853 7.853 0 0 0 5.391 22.062v-0.009l0.009 0.009c1.871 1.271 3.945 1.188 3.945 1.188 0.359 -0.015 1.562 0 2.928 -0.647 1.515 -0.718 2.377 -1.787 2.377 -1.787a7.428 7.428 0 0 0 1.296 -2.153c0.35 -0.919 0.466 -2.022 0.466 -2.462V8.273c0.047 0.028 0.671 0.441 0.671 0.441s0.9 0.577 2.303 0.952c1.007 0.267 2.363 0.323 2.363 0.323v-3.836c-0.475 0.052 -1.44 -0.098 -2.429 -0.591Z" />
                  </svg></a>
                <a href="https://www.instagram.com/itcc_udayana/" target="_blank" class="p-2 rounded-xl text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    class="fill-current">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px">
          <tr>
            <td bgcolor="#f4f4f4" align="left"
              style="
                  padding: 0px 30px 30px 30px;
                  color: #666666;
                  font-family: 'Lato', Helvetica, Arial, sans-serif;
                  font-size: 14px;
                  font-weight: 400;
                  line-height: 18px;
                ">
              <br />
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>

</html>
