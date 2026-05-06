# SIM DAD LLC

**Local-first software for serious work.**

→ [simdadllc.com](https://simdadllc.com)

---

## What we make

We ship desktop applications that do their work on the user&rsquo;s machine. No cloud round-trips, no account required, no telemetry. The category we serve is people whose source material has reasons to stay where it was authored: researchers under IRB, journalists with confidential sources, attorneys with privileged correspondence, writers under embargo.

Each product is single-purchase, perpetual license, runs offline after install. Substantiation papers backing the accuracy and encryption claims are public on Zenodo before each release.

---

## Products

### Ibis &mdash; Local Whisper transcription

Audio-to-text on Windows using OpenAI&rsquo;s Whisper large-v3-turbo. Word-error rate of 1.94% on LibriSpeech test-clean and 3.87% on test-other; methodology and per-split breakdown in the substantiation paper. Encrypted-at-rest library via age v1 + Windows Credential Manager.

→ [useibis.app](https://useibis.app) &middot; [Buy on Gumroad](https://simdadllc.gumroad.com/l/ibis)

### Lector &mdash; Distraction-free read-aloud editor

Markdown editor with word-by-word highlighting via Kokoro (12 built-in voices) and F5-TTS for voice cloning. Encrypted document library at rest. Launches May 11, 2026.

→ [uselector.app](https://uselector.app)

### TASS &mdash; Text Analysis Support Software

Native Windows desktop NLP application: dictionary-based scoring (LIWC-style + Warriner VAD + Empath + custom), group statistical comparisons, and publication-ready visualizations. Built for social scientists and journalists who need results without a Python toolchain.

→ [usetass.app](https://usetass.app)

### Orator &mdash; Document-to-narrated-video

Local pipeline that turns a .qmd or .md file into a narrated MP4 with voice-cloned TTS via F5-TTS. Single-purchase, GPU recommended. Phase 0 internal use; commercial release late 2026.

→ [useorator.app](https://useorator.app)

### Resero &mdash; Free age decrypter

A small GUI for the [age encryption format](https://age-encryption.org). MIT-licensed core, no paid tier. Recovery tool for SIM DAD product libraries and any other age v1 file. Ships after Lector v1.

→ [useresero.app](https://useresero.app)

### simdad-crypto &mdash; Open-source encryption module

Cross-product Python module wrapping `pyrage` (age v1) and the OS-native keystore (DPAPI on Windows, Keychain on macOS, Secret Service on Linux). Four-function API: `encrypt_file`, `decrypt_file`, `store_key`, `retrieve_key`. MIT-licensed. The same module is the encryption layer in Ibis, Lector, TASS, and Orator.

→ [github.com/SIM-DAD/simdad-crypto](https://github.com/SIM-DAD/simdad-crypto)

---

## Substantiation

Marketing claims about accuracy, encryption, or methodology are backed by public technical reports on Zenodo. We publish before we promote.

| Paper | DOI |
|---|---|
| Ibis v1.0 &mdash; local-first transcription with at-rest encryption | [10.5281/zenodo.19931717](https://doi.org/10.5281/zenodo.19931717) |
| Lector v1.0 &mdash; local-first document editing with at-rest encryption | [10.5281/zenodo.19963302](https://doi.org/10.5281/zenodo.19963302) |

---

## License posture

Application binaries are commercial. The encryption module (`simdad-crypto`), the standalone decrypter (Resero), and the substantiation papers are open: MIT for code, CC BY 4.0 for papers. The user holds the keys and can recover their data without us.

---

## Founder

SIM DAD LLC is the independent practice of Alex P. Leith. For academic publications, teaching materials, and lab research, see [apleith.com](https://apleith.com).

---

## Contact

| | |
|---|---|
| Site | [simdadllc.com](https://simdadllc.com) |
| General | [hello@simdadllc.com](mailto:hello@simdadllc.com) |
| Press &middot; partnerships | [ap@simdadllc.com](mailto:ap@simdadllc.com) |
| Customer support | [support@simdadllc.com](mailto:support@simdadllc.com) |
| GitHub | [github.com/SIM-DAD](https://github.com/SIM-DAD) |

---

*SIM DAD LLC &middot; Illinois, USA &middot; 2026*
