'use client';
import { useState } from 'react';
import Image from 'next/image';

const managementData = [
  {
    years: [
      "2024/2025",
      "2023/2024",
      "2022/2023",
      "2021/2022",
      "2020/2021",
      "2019/2020",
      "2018/2019",
      "2017/2018",
      "2016/2017",
      "2015/2016"
    ],
    sections: [
      {
        title: "Eksekutif",
        content: (
          <div>
            <div className="mb-2">
              <p className="font-normal text-brand-link mb-4">Ketua Umum</p>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logo.svg"
                  alt="Muhamad Adillah Fatih"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                  <p className='mb-2 font-semibold'>Muhamad Adillah Fatih</p>
                  <p className='mb-2 font-normal'>Teknik Informatika 2021</p>
                  <p className='mb-2 font-normal'>muhamadfatih@students.paramadina.ac.id</p>
                  <p className='mb-2 font-normal'>+62 821 2248 4581</p>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div className="font-normal text-brand-link mb-4">Wakil Ketua</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logo.svg"
                  alt="Viyyza Athar Sutthana Hakim"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                  <p className='mb-2 font-semibold'>Viyrza Azhar Sulthonul Hakim</p>
                  <p className='mb-2 font-normal'>Teknik Informatika 2022</p>
                  <p className='mb-2 font-normal'>viyrza.sulthonul@students.paramadina.ac.id</p>
                  <p className='mb-2 font-normal'>+62 858 8324 5565</p>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Departemen Administrasi dan Keuangan",
        content: (
          <div>
            <div className="mb-2">
              <div className="font-normal text-brand-link mb-4">Bendahara Utama</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logo.svg"
                  alt="Syahla Nadya Putri Syabrina"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                  <p className='mb-2 font-semibold'>Syahla Nadya Putri Syabrina</p>
                  <p className='mb-2 font-normal'>Teknik Informatika 2022</p>
                  <p className='mb-2 font-normal'>syahla.putri@students.paramadina.ac.id</p>
                  <p className='mb-2 font-normal'>+62 812 2849 8548</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="font-normal text-brand-link mb-4">Sekretaris Utama</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logo.svg"
                  alt="Firdayanti"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                  <p className='mb-2 font-semibold'>Firdayanti</p>
                  <p className='mb-2 font-normal'>Teknik Informatika 2022</p>
                  <p className='mb-2 font-normal'>firdayanti@students.paramadina.ac.id</p>
                  <p className='mb-2 font-normal'>+62 882 9207 8042</p>
                </div>
              </div>
            </div>
          <div className="mb-4">
            <div className="font-normal text-brand-link mb-4">Bendahara Anggota</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logo.svg"
                  alt="Pindy Putri Zalsabila"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                  <p className='mb-2 font-semibold'>Pindy Putri Zalsabila</p>
                  <p className='mb-2 font-normal'>Teknik Informatika 2023</p>
                  <p className='mb-2 font-normal'>pindy.zalsabila@students.paramadina.ac.id</p>
                  <p className='mb-2 font-normal'>+62 878 8777 7603</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
            <div className="font-normal text-brand-link mb-4">Sekretaris Anggota</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logo.svg"
                  alt="Syaqilla Maulidia"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                  <p className='mb-2 font-semibold'>Syaqilla Maulidia</p>
                  <p className='mb-2 font-normal'>Teknik Informatika 2023</p>
                  <p className='mb-2 font-normal'>syaqilla.maulidia@students.paramadina.ac.id</p>
                  <p className='mb-2 font-normal'>+62 858 9439 5070</p>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Departemen Riset dan Teknologi",
        content: (
          <div>
            <div className="mb-2">
              <div className="font-normal text-brand-link mb-4">Kepala Departemen</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logo.svg"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-semibold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="font-normal text-brand-link mb-4">Anggota Departemen</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logo.svg"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-semibold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
              <Image
                  src="/images/logo.svg"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-semibold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
              <Image
                  src="/images/logo.svg"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-semibold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        title: "Departemen Pendidikan dan Pelatihan",
        content: (
          <div>
            <div className="mb-2">
              <div className="font-normal text-brand-link mb-4">Kepala Departemen</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logo.svg"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-semibold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="font-normal text-brand-link mb-4">Anggota Departemen</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logo.svg"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-semibold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
              <Image
                  src="/images/logo.svg"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-semibold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
              <Image
                  src="/images/logo.svg"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-semibold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Departemen Kreatif dan Desain",
        content: (
          <div>
            <div className="mb-2">
              <div className="font-normal text-brand-link mb-4">Kepala Departemen</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logo.svg"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-semibold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="font-normal text-brand-link mb-4">Anggota Departemen</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logo.svg"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-semibold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
              <Image
                  src="/images/logo.svg"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-semibold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
              <Image
                  src="/images/logo.svg"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-semibold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Departemen Media dan Publikasi",
        content: (
          <div>
            <div className="mb-2">
              <div className="font-normal text-brand-link mb-4">Kepala Departemen</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logo.svg"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-semibold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="font-normal text-brand-link mb-4">Anggota Departemen</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logo.svg"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-semibold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
              <Image
                  src="/images/logo.svg"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-semibold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
              <Image
                  src="/images/logo.svg"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-semibold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Departemen Humas dan Diplomasi",
        content: (
          <div>
            <div className="mb-2">
              <div className="font-normal text-brand-link mb-4">Kepala Departemen</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logo.svg"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-semibold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="font-normal text-brand-link mb-4">Anggota Departemen</div>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/logo.svg"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-semibold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
              <Image
                  src="/images/logo.svg"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-semibold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
              <Image
                  src="/images/logo.svg"
                  alt="Nama Lengkap"
                  width={100}
                  height={100}
                  className="rounded-sm"
                />
                <div className="ml-4">
                <p className='mb-2 font-semibold'>Nama Lengkap</p>
                <p className='mb-2 font-normal'>Teknik Informatika (angkatan)</p>
                <p className='mb-2 font-normal'>email.anggota@students.paramadina.ac.id</p>
                <p className='mb-2 font-normal'>+62 8XX XXXX XXXX</p>
                </div>
              </div>
            </div>
          </div>
        )
      },
    ],
  },
];

const Management = () => {
  const [activeYear, setActiveYear] = useState("2024/2025");
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="w-full">
      <section className="tile-light section">
        <div className="container-narrow">
          <p className="eyebrow">Himtipedia</p>
          <h1 className="heading-lg mt-3">Kepengurusan HIMTI</h1>
          <p className="body-copy mt-4 max-w-2xl">
            Susunan pengurus dan departemen HIMTI Paramadina per periode
            kepengurusan.
          </p>
        </div>
      </section>

      <section className="tile-parchment section">
        <div className="container-page flex flex-col gap-8 lg:flex-row">
          <aside className="w-full shrink-0 lg:sticky lg:top-[120px] lg:w-64 lg:self-start">
            <h2 className="mb-4 text-caption-strong uppercase tracking-[0.08em] text-ink-fine">
              Tahun Kepengurusan
            </h2>
            <ul className="flex flex-wrap gap-2 lg:flex-col">
              {managementData[0].years.map((year) => (
                <li key={year}>
                  <button
                    type="button"
                    className={`w-full rounded-md border px-4 py-3 text-left text-caption transition-colors ${
                      activeYear === year
                        ? "border-brand-secondary bg-surface-canvas text-brand-link"
                        : "border-hairline bg-surface-canvas text-ink-muted hover:border-ink/25"
                    }`}
                    onClick={() => setActiveYear(year)}
                  >
                    {year}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="w-full min-w-0">
            {managementData[0].sections.map((section, index) => (
              <div key={index} className="card mb-4 overflow-hidden">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                  onClick={() =>
                    setActiveSection(activeSection === section.title ? null : section.title)
                  }
                >
                  <span className="text-tagline text-ink">{section.title}</span>
                  <Image
                    src="/images/dropdown.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={`transition-transform ${activeSection === section.title ? "rotate-180" : ""}`}
                  />
                </button>
                {activeSection === section.title && (
                  <div className="border-t border-hairline p-5 text-body text-ink-muted sm:p-6">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Management;
