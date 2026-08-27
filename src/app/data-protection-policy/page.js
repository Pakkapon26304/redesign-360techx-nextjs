import React from 'react';
import PolicyLayout from '../components/PolicyLayout';

export const metadata = {
  title: 'คำร้องขอถอนข้อมูลส่วนบุคคล | 360TECHX',
  description: 'คำร้องใช้สิทธิภายใต้ พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล'
};

export default function DataProtectionPage() {
  return (
    <PolicyLayout title="คำร้องขอถอนข้อมูลส่วนบุคคล" lastUpdated="1 กันยายน 2567">
      <h3 style={{ marginBottom: '1rem' }}>คำร้องใช้สิทธิภายใต้ พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล</h3>
      <p style={{ marginBottom: '1rem' }}>
        ในกรณีที่ท่านไม่ได้รับความสะดวกเกี่ยวกับสิทธิความเป็นส่วนตัวของท่านหรือประสงค์ที่จะยกเลิกการให้ความยินยอม ในการนี้จะมีการแจ้ง ให้ท่านทราบ ถึงผลกระทบจากการถอนความยินยอมในขณะที่ท่านแจ้งความประสงค์ถอนความยินยอม ท่านสามารถแจ้งความประสงค์ยกเลิก ความยินยอมต่อบริษัทได้ทางโทรศัพท์ 02-096-6360 ทางอีเมล <a href="mailto:thanaphon@360truck.co" style={{ color: 'var(--primary)' }}>thanaphon@360truck.co</a> หรือทาง <a href="https://www.360techx.co/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>https://www.360techx.co/</a> ส่งคำขอด้านข้อมูลของคุณไปยัง 360TechX ผ่านฟอร์มด้านล่าง
      </p>
      <p style={{ marginBottom: '2rem' }}>
        คำขอของคุณจะถูกส่งไปยังผู้ดูแลด้านข้อมูลของ 360TechX
      </p>
      
      <div style={{ background: 'var(--bg-main)', padding: 'clamp(1rem, 3vw, 2.5rem)', borderRadius: '16px', border: '1px solid var(--border-color)', marginTop: '2rem' }}>
        <form className="data-protection-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontFamily: 'inherit' }}>
          
          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>ต้องการส่งคำร้องประเภทบุคคลธรรมดา หรือนิติบุคคล <span style={{color:'red'}}>*</span></label>
            <select required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-card)', color: 'var(--text-main)', fontFamily: 'inherit' }}>
              <option value="">-- โปรดระบุ --</option>
              <option value="corporate">นิติบุคคล</option>
              <option value="individual">บุคคลธรรมดา</option>
            </select>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>ชื่อ-นามสกุล <span style={{color:'red'}}>*</span></label>
            <input type="text" required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-card)', color: 'var(--text-main)', fontFamily: 'inherit' }} placeholder="กรอกชื่อและนามสกุล หรือชื่อนิติบุคคล" />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>อีเมลของคุณ <span style={{color:'red'}}>*</span></label>
            <input type="email" required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-card)', color: 'var(--text-main)', fontFamily: 'inherit' }} placeholder="example@email.com" />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>เลขบัตรประชาชน หรือเลขทะเบียนนิติบุคคล 13 หลัก <span style={{color:'red'}}>*</span></label>
            <input type="text" required maxLength="13" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-card)', color: 'var(--text-main)', fontFamily: 'inherit' }} placeholder="1234567890123" />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>คุณต้องการใช้สิทธิ์เรื่องใด <span style={{color:'red'}}>*</span></label>
            <select required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-card)', color: 'var(--text-main)', fontFamily: 'inherit' }}>
              <option value="">-- โปรดระบุ --</option>
              <option value="delete">ข้าพเจ้าต้องการให้ 360TechX ลบข้อมูลของข้าพเจ้า (สิทธิในการลบข้อมูล ม.33)</option>
              <option value="transfer">ข้าพเจ้าต้องการให้ 360TechX โอนข้อมูลส่วนตัวมายังข้าพเจ้าหรือบุคคลที่สาม (ม.31)</option>
              <option value="inquire">ข้าพเจ้าต้องการทราบว่า 360TechX ใช้ข้อมูลส่วนตัวของข้าพเจ้าอย่างไร (ม.30)</option>
              <option value="correct">ข้าพเจ้าต้องการแก้ไขข้อมูลที่ไม่ถูกต้องที่ 360TechX ถือครองอยู่ (ม.35)</option>
              <option value="stop_marketing">ข้าพเจ้าต้องการให้ 360TechX หยุดใช้ข้อมูลส่วนตัวของข้าพเจ้าสำหรับจุดประสงค์ทางการตลาดแบบตรงหรือทางสถิติ (ม.32)</option>
              <option value="stop_using_but_keep">ข้าพเจ้าต้องการให้ 360TechX หยุดใช้ข้อมูลของข้าพเจ้า แต่ยังให้เก็บไว้ตามความจำเป็นได้ (ม.34)</option>
              <option value="object">ข้าพเจ้าต้องการคัดค้านการใช้ข้อมูลส่วนตัวของข้าพเจ้าที่ 360TechX นำไปใช้ (ม.32)</option>
            </select>
          </div>
          
          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>ทำไมคุณต้องการให้ข้อมูลของคุณถูกลบ <span style={{color:'red'}}>*</span></label>
            <select required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-card)', color: 'var(--text-main)', fontFamily: 'inherit' }}>
              <option value="">-- โปรดระบุ --</option>
              <option value="not_needed">360TechX ไม่จำเป็นต้องใช้ข้อมูลของข้าพเจ้าอีกต่อไป</option>
              <option value="withdraw_consent">ข้าพเจ้าต้องการถอนความยินยอมในการประมวลผลข้อมูล</option>
              <option value="illegal_use">ข้าพเจ้าเชื่อว่าข้อมูลของข้าพเจ้าถูกใช้อย่างผิดกฎหมาย</option>
              <option value="stop_using">ข้าพเจ้าต้องการให้หยุดใช้ข้อมูลของข้าพเจ้า</option>
              <option value="stop_marketing">ข้าพเจ้าต้องการให้หยุดใช้ข้อมูลของข้าพเจ้าสำหรับการตลาดแบบตรง</option>
              <option value="delete_by_law">ข้าพเจ้าต้องการให้ลบข้อมูลของข้าพเจ้าตามกฎหมาย</option>
            </select>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>รายละเอียดเพิ่มเติม (ถ้ามี)</label>
            <textarea rows="4" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-card)', color: 'var(--text-main)', resize: 'vertical', fontFamily: 'inherit' }} placeholder="ระบุเหตุผลหรือรายละเอียดเพิ่มเติม (ถ้ามี)"></textarea>
          </div>

          <div className="form-group" style={{ marginTop: '1rem' }}>
            <button type="button" className="btn hover-lift" style={{ width: '100%', background: 'var(--primary)', color: 'white', padding: '1rem', borderRadius: '8px', fontWeight: '700', fontSize: '1.1rem', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>ส่งคำร้องขอ</button>
          </div>
          
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '1rem', fontFamily: 'inherit' }}>
            บริษัทจะดำเนินการพิจารณาและแจ้งผลให้ท่านทราบภายใน 30 วันนับแต่วันที่ได้รับคำร้องขอที่ครบถ้วนสมบูรณ์
          </p>

        </form>
      </div>
    </PolicyLayout>
  );
}
