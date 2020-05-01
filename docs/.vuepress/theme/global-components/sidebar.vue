<template>
  <aside>
    <div class="logo_container">
      <p class="logo_text center_text">Open Music Theory</p>
    </div>
    <div
      style="border-bottom: 3px solid black;   width: 65%;
  margin: auto; margin-top: 90px;
  padding-top: 10px;
  padding-bottom: 10px;"
    >Search</div>

    <ul class="sidebar_nav_container">
      <li class="nav_section" v-for="val in nav_build">
        <dl>
          <dt class="nav_header">{{ val.header }}</dt>
          <dd class="nav_item" v-for="nav_val in val.nav">
            <router-link :to="nav_val.link">
              <span class="hitbox_span">
                <span class="underline_span">{{ nav_val.name }}</span>
              </span>
            </router-link>
          </dd>
        </dl>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data: function() {
    return {
      nav_build: [
        {
          header: "Introduction",
          nav: [
            { name: "Home", link: "/index.html" },
            {
              name: "About Open Music Theory",
              link: "/about"
            }
          ]
        },
        {
          header: "Fundamentals",
          nav: [
            { name: "Basic notation", link: "/basicNotation" },
            {
              name: "Meter",
              link: "/meter"
            },
            {
              name: "Protonotation",
              link: "/protonotation"
            },
            {
              name: "Rhythmic values",
              link: "/rhythmicValues"
            },
            {
              name: "Beams and borrowed divisions",
              link: "/beams"
            },
            {
              name: "Pitches",
              link: "/pitches"
            },
            {
              name: "Scales and scale degrees",
              link: "/scales"
            },
            {
              name: "Key signatures",
              link: "/keySignatures"
            },
            {
              name: "Intervals",
              link: "/intervals"
            },
            {
              name: "Triads and 7th chords",
              link: "/triads"
            },
            {
              name: "Types of motion.",
              link: "/motionTypes"
            }
          ]
        },
        {
          header: "Voice-leading and model composition",
          nav: [
            {
              name: "Introduction to strict voice-leading.",
              link: "/speciesIntro"
            }
          ]
        },
        {
          header: "Strict 2-voice composition (species counterpoint)",
          nav: [
            {
              name: "Composing a cantus firmus.",
              link: "/cantusFirmus"
            },
            {
              name: "Composing a first-species counterpoint.",
              link: "/firstSpecies"
            },
            {
              name: "Composing a second-species counterpoint.",
              link: "/secondSpecies"
            },
            {
              name: "Composing a third-species counterpoint.",
              link: "/thirdSpecies"
            },
            {
              name: "Composing a fourth-species counterpoint.",
              link: "/fourthSpecies"
            }
          ]
        },
        {
          header: "Strict four-voice composition",
          nav: [
            {
              name: "Introduction to thoroughbass.",
              link: "/thoroughbassFigures"
            },
            {
              name: "A brief history of basso continuo",
              link: "/bassoContinuo-history"
            },
            {
              name: "Generating Roman numerals from a figured bass line.",
              link: "/RNfromFB"
            },
            {
              name: "Composing in basso-continuo style.",
              link: "/bassoContinuo"
            },
            {
              name: "Style and tendency.",
              link: "/tendency"
            },
            {
              name: "Tendency tones and functional harmonic dissonances.",
              link: "/tendencyTonesFunctionalDissonances"
            },
            {
              name:
                "Realizing a figured bass in strict basso continuo style (video).",
              link: "/TBDemo"
            },
            {
              name: "Melodic keyboard style voice-leading.",
              link: "/melodicKeyboardStyle"
            },
            {
              name: "Melodic keyboard style voice-leading schemata.",
              link: "/KBVLschemata"
            },
            {
              name:
                "Realizing a figured bass line in melodic keyboard style (video).",
              link: "/melodicKB"
            },
            {
              name: "Realizing an unfigured bass line (video).",
              link: "/unfiguredBass"
            },
            {
              name: "Embellishing tones.",
              link: "/embellishingTones"
            }
          ]
        }
      ]
    };
  }
};
</script>
